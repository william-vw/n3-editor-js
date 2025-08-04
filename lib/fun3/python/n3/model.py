import pandas as pd

class Model:
    
    def add(self, triple):
        raise NotImplementedError()

    def done(self):
        raise NotImplementedError()

    def __iter__(self):
        raise NotImplementedError()
        
    def __len__(self):
        raise NotImplementedError()
    
    def triple_at(self, i):
        raise NotImplementedError()
    
    def contains(self, t):
        raise NotImplementedError()
    
    def triples(self):
        raise NotImplementedError()
    
    def find(self, s, p, o, ctu):
        raise NotImplementedError()
    
    def __hash__(self):
        raise NotImplementedError()
    
    def __eq__(self, other):
        return NotImplemented
    
    def __str__(self):
        raise NotImplementedError()
    def __repr__(self):
        raise NotImplementedError()
    
    
class ListModel(Model):
    
    def __init__(self, triples=None):
        self.__triples = triples if triples is not None else []
        
    def add(self, triple):
        self.__triples.append(triple)
        return self
        
    def done(self):
        # self.df = pd.DataFrame([ [ t[0].idx_val(), t[1].idx_val(), t[2].idx_val(), t ] for t in self.__triples if not t.has_graph() ], columns=list("spot"))
        # self.__triples = None
        return self
        
    def __iter__(self):
        return self.__triples.__iter__()
        
    def __len__(self):
        return len(self.__triples)
    
    def triple_at(self, i):
        return self.__triples[i]
    
    def contains(self, t):
        return t in self.__triples
    
    def triples(self):
        return self.__triples
    
    def find(self, s, p, o, ctu):
        # print("find - ", s, p, o)
        
        for t in self.__triples:
            if (t.s == s) and (t.p == p) and (t.o == o):
                # print("t -", t)
                ctu(t.s, t.p, t.o)
        
        # needle = pd.Series([ True ] * len(self.df))
        # if s is not None:
        #     needle &= self.df['s']==s.idx_val()
        # if p is not None:
        #     needle &= self.df['p']==p.idx_val()
        # if o is not None:
        #     needle &= self.df['o']==o.idx_val()
        
        # # print("needle:", needle)
        # for t in self.df.loc[needle, 't']:
        #     # if state.stop: break
        #     # print("t -", t)
        #     ctu(t.s, t.p, t.o)
    
    def __hash__(self):
        # ... not made for performance
        return hash(tuple(self.__triples))
    
    def __eq__(self, other):
        if not isinstance(other, Model):
            return False
        return self.__triples == other.__triples
    
    def __str__(self):
        return "\n".join([ str(t) for t in self.__triples ])
    def __repr__(self):
        return self.__str__()
    
    
# based on
# https://github.com/RDFLib/rdflib/blob/main/rdflib/plugins/stores/memory.py
class MultiDictModel(Model):
    
    def __init__(self):
        self.spo = {}
        self.pos = {}
        self.osp = {}
    
    def add(self, triple):
        subj, pred, obj = triple
        if subj.is_wildcard() or pred.is_wildcard() or obj.is_wildcard():
            raise Exception(f"MultiDictModel does not support triples with wildcards: {triple}")
        
        spo = self.spo
        if subj in spo:
            po = spo[subj]
        else:
            po = spo[subj] = {}
        if pred in po:
            o = po[pred]
        else:
            o = po[pred] = {}
        o[obj] = triple

        pos = self.pos
        if pred in pos:
            os = pos[pred]
        else:
            os = pos[pred] = {}
        if obj in os:
            s = os[obj]
        else:
            s = os[obj] = {}
        s[subj] = triple

        osp = self.osp
        if obj in osp:
            sp = osp[obj]
        else:
            sp = osp[obj] = {}
        if subj in sp:
            p = sp[subj]
        else:
            p = sp[subj] = {}
        p[pred] = triple
        
    def done(self):
        pass    
    
    def remove(self, triple):
        subj, pred, obj = triple
        
        del self.spo[subj][pred]
        del self.pos[pred][obj]
        del self.osp[obj][subj]

    def __iter__(self):
        for po in self.spo.values():
            for o in po.values():
                for t in o.values():
                    yield t
        
    def __len__(self):
        return sum([ 1 for _ in self])
    
    def triple_at(self, i):
        raise NotImplementedError()
    
    def contains(self, t):
        raise NotImplementedError()
    
    def triples(self):
        return self
    
    def find(self, subj, pred, obj, ctu):
        # print("find:", subj, pred, obj)
        
        def found(s, p, o):
            nonlocal ctu
            # print("found:", s, p, o)
            ctu(s, p, o)
        
        if not subj.is_wildcard(): # subject is given
            spo = self.spo
            if subj in spo:
                po = spo[subj]
                if not pred.is_wildcard():  # subject+predicate is given
                    if pred in po:
                        if not obj.is_wildcard():  # subject+predicate+object is given
                            if obj in po[pred]:
                                found(subj, pred, obj)
                        else:  # subject+predicate is given, object wildcard
                            for o in po[pred]:
                                # composite (collections, graph terms) are wildcards if they have a variable
                                # so still need to compare with these ungrounded composites
                                if o == obj:
                                    found(subj, pred, o)
                else:  # subject given, predicate woldcard
                    for p in po:
                        if p == pred:
                            if not obj.is_wildcard(): # subject+object is given, predicate wildcard
                                if obj in po[p]:
                                    found(subj, p, obj)
                            else:  # subject given, predicate+object wildcards
                                for o in po[p]:
                                    if o == obj:
                                        found(subj, p, o)
        elif not pred.is_wildcard(): # predicate is given, subject wildcard
            pos = self.pos
            if pred in pos:
                os = pos[pred]
                if not obj.is_wildcard(): # predicate+object is given, subject wildcard
                    if obj in os:
                        for s in os[obj]:
                            if s == subj:
                                found(s, pred, obj)
                else: # predicate is given, object+subject wildcard
                    for o in os:
                        if o == obj:
                            for s in os[o]:
                                if s == subj:
                                    found(s, pred, o)
        elif not obj.is_wildcard(): # object is given, subject+predicate wildcard
            osp = self.osp
            if obj in osp:
                sp = osp[obj]
                for s in sp:
                    if s == subj:
                        for p in sp[s]:
                            if p == pred:
                                found(s, p, obj)
        else: 
            for t in self:
                found(t.s, t.p, t.o)
    
    def __hash__(self):
        raise NotImplementedError()
    
    def __eq__(self, other):
        return NotImplemented
    
    def __str__(self):
        return "\n".join([ str(t) for t in self ])
    def __repr__(self):
        return self.__str__()
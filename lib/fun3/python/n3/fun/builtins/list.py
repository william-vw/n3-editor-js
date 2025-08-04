from functools import reduce
from n3.objects import Collection, Literal
from n3.fun.builtins.utils import is_numeric
from n3.ns import xsdNs
from n3.fun.builtins.utils import divide_buckets

def list_in(s, o, ctu):
    list_member(o, s, ctu)

def list_member(s, o, ctu):
    if not isinstance(s, Collection):
        return
        
    if o.is_concrete():
        if o in s:
            ctu(s, o)
    else:
        for s_i in s:
            ctu(s, s_i)

def list_iterate(s, o, ctu):
    if not isinstance(s, Collection):
        return
        
    if o.is_concrete(): # o (collection) is concrete
        if not (isinstance(o, Collection) and len(o) == 2):
            return
        
        index = None; value = None
        if o[0].is_concrete():
            if not isinstance(o[0], Literal) and is_numeric(o[0]):
                return
            index = o[0]
            if index.value > len(s):
                return
        if o[1].is_concrete():
            value = o[1]          
        
        if index is not None:
            if value is not None:
                if s[index.value] == value:
                    # (simply return original collection)
                    ctu(s, o) # o_1 (index), o_2 (value) are concrete
                return
            else:
                value = s[index.value]
                ctu(s, Collection([ index, value ])) # o_1 (index) is concrete, o_2 (value) is variable
                return
        else:
            if value is not None:
                for index, s_i in enumerate(s):
                    if s_i == value:
                        ctu(s, Collection([ Literal(index, xsdNs['int']), value ])) # o_1 (index) is variable, o_2 (value) is concrete
                return
    
    for index, s_i in enumerate(s):
        # - o (collection) is concrete but not grounded
        # (else we would have returned somewhere above)
        # - o (collection) is variable
        ctu(s, Collection([Literal(index, xsdNs['int']), s_i]))
            
def list_append(s, o, ctu):
    if not isinstance(s, Collection):
        return
    
    var_s = False # any vars in collection?
    for s_i in s:
        # (if concrete, it has to be collection)
        if s_i.is_concrete():
            if not isinstance(s_i, Collection):
                return
        else:
             var_s = True
        
    if not var_s: # pfew - simply append the elements
        o_solution = reduce(lambda s_i, s_j: s_i + s_j, s)
        
    if o.is_concrete():
        # (if concrete, it has to be collection)
        if not isinstance(o, Collection):
            return
        # if o is concrete and no vars to substitute in s,
        # simply compare append result with o
        if not var_s:
            if o_solution == o:
                ctu(s, o) # s is grounded, o is concrete
        else: 
            # if o is concrete but vars to substitute in s,
            # substitute them here
            for s_solution in divide_buckets(o, s):
                ctu(s_solution, o)
            
    else:
        # if o is var (i.e., cannot be deconstructed), 
        # cannot have vars in s
        if var_s: 
            return
        ctu(s, o_solution) # s is grounded, o is variable
from objects import Iri

class NSMeta(type):
    
    def __getattr__(cls, name):
        return cls.nameNs[name]
    

class NS(metaclass=NSMeta):
    
    uriNs = {}
    nameNs = {}
    
    # iri
    
    def __init__(self, iri, name):
        self.iri = iri
        self.name = name
        
        NS.uriNs[iri] = self
        NS.nameNs[name] = self
        
    def __getitem__(self, key):
        return Iri(self.iri + key)
    
    @staticmethod
    def has(ns_iri):
        return ns_iri in NS.uriNs
    
    @staticmethod
    def get(ns_iri):
        return NS.uriNs[ns_iri]
    
    
swapNs = NS("http://www.w3.org/2000/10/swap/", 'swap')
logNs = NS("http://www.w3.org/2000/10/swap/log#", 'log')
rdfNs = NS("http://www.w3.org/1999/02/22-rdf-syntax-ns#", 'rdf')
owlNs = NS("http://www.w3.org/2002/07/owl#", 'owl')
xsdNs = NS("http://www.w3.org/2001/XMLSchema#", 'xsd')
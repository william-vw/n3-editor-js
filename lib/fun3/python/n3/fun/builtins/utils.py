from n3.ns import xsdNs
from n3.objects import Var, Collection

def is_numeric(lit):
    if lit.dt.ns == xsdNs.iri:
        match (lit.dt.ln):
            case 'decimal':
                return True
            case 'integer':
                return True
            case 'long':
                return True
            case 'int':
                return True
            case 'short':
                return True
            case 'byte':
                return True
            case 'double':
                return True
            case 'float':
                return True
            # TODO: https://www.w3.org/TR/xmlschema-2/#built-in-datatypes
            
    return False

# TODO do this based on types of operands
def xsd_num_type(num):
    match (type(num)):
        case 'int':
            return xsdNs.int
        case 'float':
            return xsdNs.float
        case 'complex':
            return xsdNs.double

def divide_buckets(coll, buckets, buck_no=0, start_idx=0, result=[]):
    if buck_no == len(buckets): # out of buckets
        if start_idx == len(coll): # at end of list
            yield Collection(result)
        return
        
    bucket = buckets[buck_no]
    if isinstance(bucket, Collection):
        # compare bucket contents with list at this point
        for buck_idx in range(0, len(bucket)):
            next_idx = start_idx + buck_idx
            # either:
            # not yet at end of bucket, but at end of list
            # bucket element is not the same as list element
            if next_idx == len(coll) or bucket[buck_idx] != coll[next_idx]:
                return
        # at end of bucket; comparison was successful
        new_result = result + [ Collection(bucket) ]
        yield from divide_buckets(coll, buckets, buck_no+1, next_idx+1, new_result)
    elif not bucket.is_concrete():
        # try all remaining elements as content of this bucket
        for next_idx in range(start_idx, len(coll)+1):
            new_result = result[:] + [ Collection(coll[start_idx:next_idx]) ]
            yield from divide_buckets(coll, buckets, buck_no+1, next_idx, new_result)
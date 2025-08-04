# import sys
# sys.insert(0, "..")
# from n3.model import MultiDictModel

# no need for MultiDictModel here
emitted = set()
def emit(t, inst_dict):
    global emitted
    t = t.instantiate(inst_dict)
            
    if t not in emitted:
        print(t)
        emitted.add(t)
    # else:
    #     print("skipping duplicate")
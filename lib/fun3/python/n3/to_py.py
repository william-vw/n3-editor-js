import argparse
from pathlib import Path
import time
from ast import dump, unparse, parse
from parse import parse_n3
from objects import ANY
from fun.gen import gen_py, InputData, QueryFn
from fun.utils import unique_sorted

def __proc_inputs(query, rules, data):
    query_str = query.open('r').read() if isinstance(query, Path) else query
    query = parse_n3(query_str, has_vars=True).data.triple_at(0)
    
    rules_str = rules.open('r').read() if isinstance(rules, Path) else rules
    rules = parse_n3(rules_str, has_vars=True).rules
    
    data = InputData(path=data) if isinstance(data, Path) else InputData(data_str=data)    
    
    # print(query); print(rules); print(data)
    return (query, rules, data)

def run_py(query, rules, data):
    start = time.perf_counter()
    query, rules, data = __proc_inputs(query, rules, data)
    netw_time = round((time.perf_counter() - start)*1000,0)
    
    start = time.perf_counter()
    mod = gen_py(rules, query, data, call_query=False)    
    gen_time = round((time.perf_counter() - start)*1000,0)
        
    start = time.perf_counter()
    exec_ret = __get_exec(mod)
    output = __exec_query(exec_ret, query)
    exec_time = round((time.perf_counter() - start)*1000,0)
    
    reas_time = gen_time + exec_time
    
    print(output)
    print("-- START CODE --")
    print(unparse(mod))
    
    return (netw_time, gen_time, exec_time, reas_time)
       
def __get_exec(mod):
    mod_code = compile(mod, "<fun3>", "exec")
    
    new_refs = {}
    exec(mod_code, globals(), new_refs)
    
    for name, code in new_refs.items():
        globals()[name] = code
        
    return new_refs

# def __unparse_with_lineno(ast):
#     code = unparse(ast)
#     return "\n".join([ f"{i+1}. {line}" for i, line in enumerate(code.split("\n")) ])

def __exec_query(exec_ret, query):
    fn_name = QueryFn.fn_name()
    variables = unique_sorted(query.recur_vars())
    
    query_fn = exec_ret[fn_name]
    
    out = set()
    query_fn(*[ANY for _ in variables], lambda *args: out.add(str(query.instantiate({ var: args[idx] for idx, var in enumerate(variables) }))))
    
    return "\n".join(out)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Run test manifest.")
    parser.add_argument('--query', help="Query path.", required=True)
    parser.add_argument('--rules', help="Rules path.", required=True)
    parser.add_argument('--data', help="Data path.", required=True)

    args = parser.parse_args()
    query = args.query
    rules = args.rules
    data = args.data
    
    run_py(Path(query), Path(rules), Path(data))
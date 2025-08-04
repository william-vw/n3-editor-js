indent_level = 0
def trace_calls(frame, event, arg):
    global indent_level
    if "rule" in frame.f_code.co_name:
        if event == 'call':
            call_args = { var_name: frame.f_locals[var_name] for var_name in frame.f_code.co_varnames[:frame.f_code.co_argcount] 
                         if var_name in frame.f_locals and var_name != 'final_ctu' }
            print('  ' * indent_level + f"Callin: {frame.f_code.co_name} {call_args}")
            indent_level += 1
        elif event == 'return':
            indent_level -= 1
            print('  ' * indent_level + f"Return: {frame.f_code.co_name} (Returned: {arg})")
    return trace_calls
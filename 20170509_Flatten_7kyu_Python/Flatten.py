def flatten(lst):
    if len(lst) == 0: return []
    if type(lst[0]) != type(lst): return lst
    return [val[i] for val in lst for i in range(0,len(val))]

# best practice:

# def flatten(lst):
#     r = []
#     for x in lst:
#        if type(x) is list:
#           r.extend(x)
#        else:
#           r.append(x)
#     return r 
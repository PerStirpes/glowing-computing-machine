def createDict(keys, values):
    return {keys[i]: (values[i] if i in range(0,len(values)) else None) for i in range(0,len(keys))}

# best practice:

# def createDict(keys, values):
#     while len(keys) > len(values):
#         values.append(None)
    
#     dictionary = dict(zip(keys, values)) 
#     return dictionary
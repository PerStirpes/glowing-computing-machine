def isValidWalk(walk):
    pairs = {'n': 's', 's': 'n', 'w': 'e', 'e': 'w'}
    stack = []
    
    for block in walk:
        if pairs[block] in stack:
            stack.remove(pairs[block])
        else:
            stack.append(block)
    
    if len(walk) == 10 and len(stack) == 0:
        return True
    
    return False

# best practice:

# def isValidWalk(walk):
#     return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')
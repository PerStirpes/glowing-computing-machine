def snail(array):
    if len(array) == 1: return array[0]
    arr = array[:]
    snail = []
    
    while len(arr) > 1:
        snail.extend(arr.pop(0))
        for i in range(0,len(arr)):
            snail.append(arr[i].pop())
        snail.extend(arr.pop()[::-1])
        for i in range(len(arr)-1,-1,-1):
            snail.append(arr[i].pop(0))
    
    if len(arr) > 0:
        snail.extend(arr[0])
    return snail


# most clever

def snail(array):
    return list(array[0]) + snail(zip(*array[1:])[::-1]) if array else []
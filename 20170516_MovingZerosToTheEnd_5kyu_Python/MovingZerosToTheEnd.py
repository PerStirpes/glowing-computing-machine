def move_zeros(array):
    arrFalses = [index for index, val in enumerate(array) if val is False]    
    arrZeros = [index for index, val in enumerate(array) if val == 0 and index not in arrFalses]
    arrayFinal1 = [val for index,val in enumerate(array) if index not in arrZeros]
    arrayFinal2 = [val for index,val in enumerate(array) if index in arrZeros]
    return arrayFinal1 + arrayFinal2

# best practice

# def move_zeros(arr):
#     l = [i for i in arr if isinstance(i, bool) or i!=0]
#     return l+[0]*(len(arr)-len(l))
def sort_twisted37(arr):

    arr1 = [(str(val)).replace("3","*") for val in arr]
    arr2 = [val.replace("7","3") for val in arr1]
    arr3 = sorted([int(val.replace("*","7")) for val in arr2])
    
    arr4 = [(str(val)).replace("3","*") for val in arr3]
    arr5 = [val.replace("7","3") for val in arr4]
    return [int(val.replace("*","7")) for val in arr5]

# print(sort_twisted37([1,2,3,4,5,6,7,8,9])) # [1,2,7,4,5,6,3,8,9]
# print(sort_twisted37([12,13,14])), # [12,14,13]
# print(sort_twisted37([9,2,4,7,3])) # [2,7,4,3,9]
print(sort_twisted37([7, -1, -28, 24, 74, 67, -15, 86, -26, 13, 76, 95, 19, 87, 2, 61, 11, 11, 14, 35, 69, 25, -6, 63])

# # best practice:

# def sort_twisted37(arr):
# def key(x):
#     return int(str(x).translate(str.maketrans('37', '73')))
# return sorted(arr, key=key)
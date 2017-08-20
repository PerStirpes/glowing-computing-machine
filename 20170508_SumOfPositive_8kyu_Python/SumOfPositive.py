def positive_sum(arr):
    if(len(arr) == 0): return 0
    return sum([val for val in arr if val > 0])

# best practice

# def positive_sum(arr):
#     return sum(x for x in arr if x > 0)
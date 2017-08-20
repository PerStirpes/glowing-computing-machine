def order_type(arr):
    lengths = []
    for val in arr:
        if type(val) == int:
            lengths.append(len(str(val)))
        else:
            lengths.append(len(val))
    if lengths[1:] == lengths[:-1]:
        return "Constant"
    if sorted(lengths) == lengths:
        return "Increasing"
    if sorted(lengths,reverse=True) == lengths:
        return "Decreasing"
    return "Unsorted"

# best practice

# none have really risen to the top
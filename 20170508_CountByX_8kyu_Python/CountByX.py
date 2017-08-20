def count_by(x, n):
    """
    Return a sequence of numbers counting by `x` `n` times.
    """
    return [val * x for val in range(1,n+1)]

# best practice

# def count_by(x, n):
#     """
#     Return a sequence of numbers counting by `x` `n` times.
#     """
#     return range(x, x * n + 1, x)
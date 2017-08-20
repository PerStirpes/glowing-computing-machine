def high_and_low(numbers):
    l = [int(val) for val in numbers.split(" ")]
    return "{} {}".format(max(l), min(l))

# best practice

# def high_and_low(numbers): #z.
#     nn = [int(s) for s in numbers.split(" ")]
#     return "%i %i" % (max(nn),min(nn))
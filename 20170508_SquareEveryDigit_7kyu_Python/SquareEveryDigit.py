def square_digits(num):
    num_string = str(num)
    return int("".join([str(int(val)**2) for val in num_string]))


# # best practices

# def square_digits(num):
#     ret = ""
#     for x in str(num):
#         ret += str(int(x)**2)
#     return int(ret)


# # most clever

# def square_digits(num):
#     return int(''.join(str(int(d)**2) for d in str(num)))
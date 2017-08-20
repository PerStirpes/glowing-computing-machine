def position(alphabet):
    return "Position of alphabet: {}".format(1+list("abcdefghijklmnopqrstuvwxyz").index(alphabet))

# best practice:

# def position(alphabet):
#     return "Position of alphabet: {}".format(ord(alphabet) - 96)
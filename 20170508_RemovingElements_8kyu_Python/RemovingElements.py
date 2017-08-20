def remove_every_other(my_list):
    return [val for index, val in enumerate(my_list) if index % 2 == 0]

# best practice

# def remove_every_other(my_list):
#     return my_list[::2]
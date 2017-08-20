def bonus_time(salary, bonus):
    if bonus:
        return "${}".format(salary * 10)
    return "${}".format(salary)

# best practice:

# def bonus_time(salary, bonus):
#     return "${}".format(salary * (10 if bonus else 1))
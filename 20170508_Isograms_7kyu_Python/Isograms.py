def is_isogram(string):
    return True if len(set(string.lower())) == len(string.lower()) else False

# best practice

def is_isogram(string):
    return len(string) == len(set(string.lower()))
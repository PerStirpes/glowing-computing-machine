def toJadenCase(my_string):
    import string
    return string.capwords(my_string)

# best practice

def toJadenCase(string):        
    return " ".join(w.capitalize() for w in string.split())
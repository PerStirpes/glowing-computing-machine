def get_middle(s):
    if len(s) % 2 != 0:
        return s[len(s)/2] 
    return s[int(len(s)/2 - 1)] + s[int(len(s)/2)]
    
# best practice

# def get_middle(s):
#    return s[(len(s)-1)/2:len(s)/2+1]
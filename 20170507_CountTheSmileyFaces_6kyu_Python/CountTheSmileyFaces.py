def count_smileys(arr):
 
    newArr = [val
                for val in arr 
                if (len(val) == 2 and 
                (val[0] == ":" or val[0] == ";") and 
                (val[-1] == ")" or val[-1] =="D")) 
                or 
                (len(val) == 3 and 
                (val[0] == ":" or val[0] == ";") and 
                (val[-1] == ")" or val[-1] == "D") and
                (val[1] == "~" or val[1] == "-"))
              ] 
    
    return len(newArr)

    # best solution:

    from re import findall
def count_smileys(arr):
    return len(list(findall(r"[:;][-~]?[)D]", " ".join(arr))))

    
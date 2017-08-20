def in_array(array1, array2):
    print(array1, array2)
    # given two arrays of strings
    # return a sorted array r in lexicographical order of the strings
    # a1 which are substrings of strings in a2
    l = []
    for a2vals in array2:
        if([a1vals for a1vals in array1 if a1vals in a2vals] not in l):
            l.extend([a1vals for a1vals in array1 if a1vals in a2vals])
  
    return sorted(list(set(l)))


 # best practices

 # def in_array(a1, a2):
 #    return sorted({sub for sub in a1 if any(sub in s for s in a2)})
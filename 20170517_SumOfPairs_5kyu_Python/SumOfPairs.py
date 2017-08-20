def sum_pairs(ints, s):
    dict = {ints[0]: s - ints[0]}
    j = 1
    while (j < len(ints)):
        if ints[j] in dict.values():
            return [s-ints[j],ints[j]]
        dict[ints[j]] = s - ints[j]
        j+=1
    return None

# best practice:

# def sum_pairs(lst, s):
#     cache = set()
#     for i in lst:
#         if s - i in cache:
#             return [s - i, i]
#         cache.add(i)


# original method -- too slow for the really large lists

# def sum_pairs(ints, s):
#     i,j = 0,1
#     while (j < len(ints)):
#         while (i < j):
#             print(i,j,"=",ints[i],ints[j])
#             if ints[i] + ints[j] == s:
#                 return [ints[i],ints[j]]
#             i+=1
#         i=0
#         j+=1

# print(sum_pairs([11, 3, 7, 5], 10)) # [3,7]

print(sum_pairs([1, 4, 8, 7, 3, 15], 8)) # [1,7]
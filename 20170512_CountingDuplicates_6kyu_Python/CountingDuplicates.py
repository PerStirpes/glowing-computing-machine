def duplicate_count(text):
    return len([val for val in set(text.lower()) if text.lower().count(val) > 1])

# My earlier solutions:


# def duplicate_count(text):
#     return len([text.lower().count(val) for val in set(text.lower()) if text.lower().count(val) > 1])

# def duplicate_count(text):
# return len([list(text.lower()).count(val) for val in set(list(text.lower())) if list(text.lower()).count(val) > 1])

# def duplicate_count(text):
# text_list = list(text.lower())
# text_set = set(text_list)
# count = 0
# for val in text_set:
#     if text_list.count(val) > 1:
#         count += 1
# return count


print(duplicate_count("aabbcde"))
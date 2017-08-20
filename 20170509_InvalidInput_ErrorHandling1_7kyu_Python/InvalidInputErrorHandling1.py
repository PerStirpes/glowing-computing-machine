# my attempt - could not get it to work when None was passed

# def get_count(*words):
# #     print(words)

# #     if words == None or len(words) == 0: return {"vowels": 0, "consonants": 0}
#     if None in words:
#         return {"vowels": 0, "consonants": 0}
#     if len(words) == 0:
#         return {"vowels": 0, "consonants": 0}
#     else:
#         words = words[0]
#         l = list(words.replace(" ",""))
#         count_all = {val: l.count(val) for val in l}
#         count_vowels = 0
#         for vals in count_all:
#             if vals in "aeiouAEIOU":
#                 count_vowels += count_all[vals]
#         return {"vowels": count_vowels, "consonants": len(l) - count_vowels}

# best practice

def get_count(words=""):
    if not isinstance(words, str):
        return {'vowels':0,'consonants':0}
    letter = "".join([c.lower() for c in words if c.isalpha()])
    vowel = "".join([c for c in letter if c in 'aeiou'])
    consonant = "".join([c for c in letter if c not in 'aeiou']) 
    return {'vowels':len(vowel),'consonants':len(consonant)}
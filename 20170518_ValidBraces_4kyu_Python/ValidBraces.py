def validBraces(string):
  stack, dict = [], {'(': ')', '[': ']', '{': '}'}
  first, last = string[0], string[len(string)-1]
  if first == ')' or first == ']' or first == '}' or last == '(' or last == '[' or last == '{': 
      return False 
  for char in string:
      if char in dict:
          if len(stack) == 0 or char != dict[stack[-1]]: 
              stack.append(char)
      elif char == dict[stack[-1]]:
          stack.pop()
  return len(stack) == 0


# best practices

# def validBraces(string):
#     braces = {"(": ")", "[": "]", "{": "}"}
#     stack = []
#     for character in string:
#         if character in braces.keys():
#             stack.append(character)
#         else:
#             if len(stack) == 0 or braces[stack.pop()] != character:
#                 return False
#     return len(stack) == 0  
def validBraces(string):
  paren_count = 0
  bkt_count = 0
  brc_count = 0
  last = ""
  
  for i in range(0,len(string)):

  	# look for openings
    if string[i] == "(":
    	paren_count += 1
    	last = "paren_open"
    if string[i] == "[":
      	bkt_count += 1
      	last = "bkt_open"
    if string[i] == "{":
      	brc_count += 1
      	last = "brc_open"

    # look for closings
    if string[i] == ")" and (last == "paren_open" or last == "close"):
    	paren_count -= 1
    	last = "close"
    if string[i] == "]" and (last == "bkt_open" or last == "close"):
      	bkt_count -= 1
      	last = "close"
    if string[i] == "}" and (last == "brc_open" or last == "close"):
      	brc_count -= 1
      	last = "close"

    # if any go below zero, a close happened before an open --> False
    if paren_count < 0 or bkt_count < 0 or brc_count < 0:
    	return False

  # if they all are zero at the end, return True
  if paren_count == 0 and bkt_count == 0 and brc_count == 0:
  	return True
  
  # else, return False
  return False

# Tests:

# print(validBraces( "(){}[]" )) # True - works!
# print(validBraces( "(}" )) # False - works!
# print(validBraces("[(])")) # False - Works! 
# print(validBraces("([{}])")) # True - works!
# print(validBraces("{}[]()(([])]){{}}")) # works :)
# print(validBraces('{{{[[()()]]}}}')) # true

# Elie's solution - elegant but O(n^2):

# def validBraces(s):
# 	while '{}' in s or '()' in s or '[]' in s:
# 		s=s.replace('{}','')
# 		s=s.replace('[]','')
# 		s=s.replace('()','')
# 	return s==''

# Tim's solution:

# def validBraces(string):
# 	stack = []
# 	matches = {'(': ')', '[': ']', '{': '}'}

# 	for c in string:
# 		if c == '(' or c == '{' or c == '[':
# 			stack.append(c)
# 		elif len(stack) == 0:
# 			return False
# 		else:
# 			last = stack.pop()
# 			if matches[last] != c:
# 				return False

# 	return len(stack) == 0 # checks that everything that's been opened
# 	# has also been closed
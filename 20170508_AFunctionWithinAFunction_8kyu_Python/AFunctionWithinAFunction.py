
# My attempt, which did not work

def always(n=0):
	def inner(n): # can't (and don't need to) pass n to inner
		return n
	return inner



# Best practice:

# def always(n=0):
#     def result():
#         return n
#     return result
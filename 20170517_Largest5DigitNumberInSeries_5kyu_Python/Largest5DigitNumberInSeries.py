def solution(digits):
    s = set()
    for i in range(0, len(digits)-4):
        s.add(int(digits[i]+digits[i+1]+digits[i+2]+digits[i+3]+digits[i+4]))
    return max(s);

# refactored:
# def solution(digits):
#     s = set()
#     for i in range(0, len(digits)-4):
#         s.add(int(digits[i:i+5]))
#     return max(s);


# best practice:

# def solution(dd):
#     return max(int(dd[i:i+5]) for i in range(len(dd) - 4))
def longest_palindrome (s):
    if len(s) == 0: return 0
    if len(s) == 1: return 1

    i,j,k,count,max = 0, len(s)-1,0,0,0
    
    while i < len(s):
        k = i
        while j > k:
            if s[k].lower() == s[j].lower():
                k += 1
                j -= 1
                count += 2
                if k == j:
                    count += 1
            else:
                j -= 1
                k = i
                count = 0
        if count > max:
            max = count
        count = 0
        i += 1
        j = len(s)-1
        
    if max == 0: return 1
    return max

# best practices

# def longest_palindrome (s):
#     longest = 0
#     for left in xrange(len(s)):
#         for right in xrange(len(s), left, -1):
#             if s[left:right] in (s[left:right])[::-1]:
#                 longest = max(right-left, longest)
#                 break
#     return longest

# print(longest_palindrome('FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))
# print(longest_palindrome('baablkjA2345432a33d')) # 1
def shoot(results):
    scoring = {"XX": 2, "XO": 1, "OX": 1, "OO": 0}
    pete = 0
    phil = 0
    
    for round in results:
        pete += scoring[round[0]["P1"]] * (2 if round[1] == True else 1)
        phil += scoring[round[0]["P2"]] * (2 if round[1] == True else 1)
    
    if pete > phil:
        return "Pete Wins!"
    
    if phil > pete:
        return "Phil Wins!"
        
    return "Draw!"


# best practice - haven't learned lambda yet

# def shoot(results):
#     pt1, pt2 = 0, 0
#     countPts = lambda elt,pt: (elt[1]+1)*elt[0][pt].count('X')
#     for elt in results:
#         pt1 += countPts(elt,'P1')
#         pt2 += countPts(elt,'P2')
#     if pt1>pt2 :     return 'Pete Wins!'
#     elif pt1==pt2 :  return 'Draw!'
#     else:            return 'Phil Wins!'
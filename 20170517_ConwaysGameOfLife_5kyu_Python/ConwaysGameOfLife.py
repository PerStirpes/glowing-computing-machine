def next_gen(cells):
    print(cells)
    if cells == []: return cells
    # need to iterate through the arrays and make an array of neighboring elements
    # example: [[0,1,0], // [[2,1,2] //  [[0,0,0],
    #           [0,1,0], //  [3,2,3] //  [1,1,1],
    #           [0,1,0]] //  [2,1,2]] // [0,0,0]]
    n, m = len(cells[0]), len(cells) # n=length of each array, m=number of arrays
    print("n,m",n,m)
    print(cells[1][2]) # returns 6 (array #1, index #2 within that array)
    sum = [[0 for x in range(n)] for y in range(m)]
    print(sum)
    for i in range(m):
        for j in range(n):
            if i>0:
                sum[i][j] += cells[i-1][j]
            if j>0:
                sum[i][j] += cells[i][j-1]
            if i<(m-1):
                sum[i][j] += cells[i+1][j]
            if j<(n-1):
                sum[i][j] += cells[i][j+1]
                
            if i>0 and j>0:
                sum[i][j] += cells[i-1][j-1]
            if i<(m-1) and j<(n-1):
                sum[i][j] += cells[i+1][j+1]
            if i>0 and j<(n-1):
                sum[i][j] += cells[i-1][j+1]
            if i<(m-1) and j>0:
                sum[i][j] += cells[i+1][j-1]
    print(sum)
    # compare sum to original. if original = 1
    for i in range(m):
        for j in range(n):
            if cells[i][j] == 1 and sum[i][j] < 2:
                cells[i][j] = 0
            if cells[i][j] == 1 and sum[i][j] > 3:
                cells[i][j] = 0
            if cells[i][j] == 0 and sum[i][j] == 3:
                cells[i][j] = 1
    return cells

print(next_gen([[1,2,3],[4,5,6]]))



# best practice

# NEIGHBORS = ((-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1))

# def next_gen(cells):
#     if not cells:
#         return []
#     if not cells[0]:
#         return [[]] * len(cells)
#     M = len(cells[0])
#     N = len(cells)

#     def cell(cells, x, y):
#         return cells[y][x] if 0 <= x < M and 0 <= y < N else 0

#     def numNeighbors(cells, x, y):
#         return sum(cell(cells, x + i, y + j) for (i, j) in NEIGHBORS)

#     def liveCell(cells, x, y):
#         return int(numNeighbors(cells, x, y) in ((2, 3) if cells[y][x] else (3,)))

#     return [[liveCell(cells, x, y) for x in xrange(M)] for y in xrange(N)]
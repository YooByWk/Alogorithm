import sys
input = sys.stdin.readline


paper = int(input())
mapa = [[0]*1001 for _ in range(1001)]
# mapa = [['0']*51 for _ in range(51)]
# 가장 아래 칸의 번호와 너비 높이
cnt = 0
k = 0
for i in range(paper):
    k += 1
    dx,dy,w,h = map(int, input().split())
    for x in range(dx, dx+w): #  높? +1
        for y in range(dy, dy +h): # 너 +1
            mapa[x][y] = k

ans = [0] * (paper+1)

for r in range(1001):
    for c in range(1001):
        if mapa[r][c] != 0:
            ans[mapa[r][c]] += 1
# print(mapa)
for i in range(1,1+paper):
    print(ans[i])


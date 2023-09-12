import sys
sys.setrecursionlimit(10000)
def bug(r,c):
    for d in dt:
        nr,nc = r+d[0],c+d[1]
        if 0<= nr<N and 0<= nc<M:
            if arg[nr][nc] ==1:
                arg[nr][nc] = 0
                bug(nr,nc)

T = int(input())

for t in range(T):
    M,N,K = map(int, input().split())
    arg = [[0]*M for _ in range(N)]
    # vst = [[False]*M for _ in range(N)]
    # print(arg)
    for plant in range(K):
        x,y = map(int,input().split())
        arg[y][x] = 1
    # print(arg)
    dt = ((1,0),(-1,0),(0,-1),(0,1))
    # for d in dt:
        # print(*d)
#     print(dt[1])
    # 주변에 1 있으면 아무튼 다 죽여버리셈 죽일때마다 cnt +1
    cnt = 0
    for r in range(N):
        for c in range(M):
            if arg[r][c] == 1:
                arg[r][c] = 0
                bug(r, c)
                cnt += 1
    print(cnt)




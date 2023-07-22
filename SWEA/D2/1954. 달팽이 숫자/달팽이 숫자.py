T = int(input())
for testcase in range(1,1+T):

    N = int(input())

    S = [[0]*N for n in range(N)]

    x, y = 0, 0
    head = 'R'
    num = 1
    
    while num <= N * N:
        S[x][y] = num # 해당 자리에 넣을? 넣은? 번호 아마도 넣은번호
        num += 1
        if head == 'R':
            if (y +1 < N) and S[x][y+1] == 0: #y인 이유는 2차원배열이라서 x는 리스트 번호, y는 리스트 내부 것
               y += 1
            else:
                x += 1
                head = 'D'
        elif head == 'D':  #내려가는 중
            if x + 1 < N and S[x+1][y] == 0:
             x += 1
            else:
                y -= 1 
                head = 'L'
        elif head == 'L':
            if (y > 0 ) and S[x][y-1] == 0 : 
                y -= 1
            else:
                x -= 1
                head = 'U'
        elif head == 'U':
            if (x - 1)> 0 and S[x-1][y] == 0 : 
                x -= 1 
            else:
                y += 1
                head = 'R'
    print(f'#{testcase}')
    for K in S:
        print(*K)



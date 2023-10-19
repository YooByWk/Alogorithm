# 부녀회장은 무슨 일을 해요?
#  k = 1 , n = 3
# 103 호
# 001, 002 ,003 101 ,102 호 . . .
# T

#
# def idk(K,N):
#     if N == 0:
#         return 1
#     if K == 0:
#         return home[N]
#     return idk(K,N-1)  idk(K-1,N)


T = int(input())
for tc in range(T):
    # k = 층
    k = int(input())
    # a층의 b호에 살려면  a-1 층의 1호부터 b 호까지의  인간을 데려와 살아야 한다.?
    # n = 호 1
    n = int(input())
    # 아파트는 0층부터, 호수는 1호 부터.
    home = [[0]*14 for _ in range(15)]
    # print(home)
    # 1 층 부터  14층까지
    # 0 호 부터 13호까지
    PP = 1
    for i in range(0,14): # 호 N
        home[0][i] = PP
        PP += 1
    for i in range(0,15): # 층
        home[i][0] = 1

    # print(home[0])
    # for i in range(14):
    #     print(home[i][0])
    n -= 1
    # print(idk(k,n))
    for r in range(1,15):
        for c in range(1,14):
            home[r][c] = home[r-1][c] + home[r][c-1]
    # print(home[1])
    print(home[k][n])
    # print(home[14][13])
    # for i in home:
    #     print(i)
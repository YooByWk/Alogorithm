# D2 : SWEA. 2357. [AtCoder Beginner Contest 073] A. September 9
T = int(input())
for test_case in range(1,T+1):
    K = str(int(input()))
    a = []
    d9 = False
    for i in K: #리스트에 암튼 리스트에
        a.append(i)
        if int(i) % 9 == 0 and int(i) != 0:
            d9 = True
    if d9 == True:
        print(f'#{test_case} Yes')
    else:
        print(f'#{test_case} No')


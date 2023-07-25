# D2 : SWEA. 2386. [AtCoder Beginner Contest 073] C. Write and Erase

T = int(input()) #테스트 케이스 
for test_case in range(1, 1+T):
    N = int(input()) # n개를 입력받을 예정
    my_lst = []
    for i in range(1,N+1):
        a = int(input())
        if a not in my_lst:
            my_lst.append(a)
        else:
            my_lst.remove(a)
    print(f'#{test_case} {len(my_lst)}')
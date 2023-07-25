# D2 : SWEA. 2369. [AtCoder Beginner Contest 073] B. Theater 

T = int(input()) #테스트 케이스 
for test_case in range(1, 1+T):
    seats = [0] * 100000
    N = int(input()) # 아마도 손님 그룹의 수
    for N in range(1, N+1): 
        ocupado = list(map(int, input().split())) #그룹 나누기?
        for asu in range(ocupado[0],ocupado[1]+1): # ~부터 ~까지
            seats[asu] = 1 # 그 자리 1로 만들어줌
    print(f'#{test_case} {seats.count(1)}') # 출력


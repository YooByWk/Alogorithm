A= list(map(int, input().split()))
A.sort()
while sum(A) != 0:
    if A[0]**2 + A[1]**2 == A[2]**2:
        print('right')
    else:
        print('wrong')
    A = list(map(int,input().split()))
    A.sort()

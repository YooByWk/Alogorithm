import sys
input = sys.stdin.readline
from collections import deque
for t in range(int(input())):
    N,M = map(int,input().split())  # N 은 문서의 개수, M 은 해당 자료의 idx
    ls = list(map(int,input().split()))
    test = [[0] for _ in range(N)]
    dq = deque()
    for i in range(N):
        test[i] = [ls[i],i]
        dq.append(test[i])
    cnt = 1
    ls.sort()
    # print(dq)
    k = dq.popleft()
    # print(k)
    while dq:
        if k[1] == M and k[0] == ls[-1]:
            break
        elif k[0] == ls[-1]:
            ls.pop()
            cnt += 1
        else:
            dq.append(k)
        k = dq.popleft()


    print(cnt)


    # print(test)
    #
# q = deque(map(int, input().split()))
    # 0 번째부터

import sys
input = sys.stdin.readline
from collections import deque

N, K = map(int,input().split())
ans = []
lst = deque( i for i in range(1,N+1))
cnt = 0
while lst:
    cnt += 1
    if cnt % K == 0:
        ans.append(lst.popleft())
    else:
        lst.append(lst.popleft())
print('<',end = '')
for i in range(N-1):
    print(ans[i], end = ', ')
print(ans[N-1],end='')
print('>')
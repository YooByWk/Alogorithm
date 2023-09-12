import sys
input = sys.stdin.readline
N,M = map(int,input().split()); lst = [i for i in range(1,1+N)]
# print(lst)
for _ in range(M):
    t1, t2 = map(int,input().split())
    lst[t1-1],lst[t2-1] = lst[t2-1],lst[t1-1]
print(*lst)
#dfs and bfs
from collections import deque

def dfs(start):
    visited[start] = True
    print(start, end = ' ')

    for i in nd[start]:
        if not visited[i]:
            dfs(i)
# 재귀 자체가 stack의 구조를 따른다.
def bfs(start):
    # pass
    visited = [False] * (N + 1)
    q = deque()
    q.append(start)
    visited[start] = True
    while q:
        w = q.popleft()
        print(w, end=' ')
        for i in nd[w]:
            if not visited[i]:
                q.append(i)
                visited[i] = True






N,M,V = map(int, input().split())
# N 정점의 개수
# M 간선의 개수
# V 시작 지점
# print(N,M,V)
nd = [[] for _ in range(N+1)]
for i in range(M):
    a, b = map(int,input().split())
    nd[a].append(b)
    nd[b].append(a)
# print(nd)
# for i in nd:
#     i.sort(reverse=True)

dfs_nd = nd[:]
for i in dfs_nd:
    i.sort(reverse=True)

for i in nd:
    i.sort()
# print(dfs_nd)
visited  = [False] * (N + 1)
dfs(V)

print()
bfs(V)

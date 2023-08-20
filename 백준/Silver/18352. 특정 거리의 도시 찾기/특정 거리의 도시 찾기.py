# 단방향 도로
import sys
input = sys.stdin.readline
from collections import deque
def bfs(X):
    visited = [False] * (N+1)
    q = deque([X])
    ans = []
    q.append(X)  # X는 출발 위치다
    visited[X] = True
    dis = [0] * (N+1)
    dis[X] = 0

    while q:
        tmp = q.popleft()
        for t in near[tmp]:
            if not visited[t] :
                q.append(t)
                visited[t] = True
                dis[t] = dis[tmp] + 1
                if dis[t] == K:
                    ans.append(t)
    return ans


N, M, K, X = map(int,input().split())  # 도시 수, 도로 개수 ,거리 정보, 출발 번호
# 최단거리가 정확히 K인 장소만을 찾아라.
lst = []
for i in range(M):
    k = list(map(int,input().split()))
    lst.append(k)
# print(lst)
near = [[] for _ in range(N+1)]
# print(near)
for i in lst:
    a,b = i
    near[a].append(b)
# print(near)
if len(bfs(X)) ==0:
    print(-1)
else:
    kkk = bfs(X)
    kkk.sort()
    for i in kkk:
        print(i)
from collections import deque


def bfs(start):
    visited[start] = True
    deq = deque()
    deq.append(start)

    while deq:
        temp = deq.popleft()
        for go in city[temp]:
            if not visited[go]:
                visited[go] = True
                deq.append(go)
                dis[go] = dis[temp] + 1

                if dis[go] == K:
                    ans.append(go)




N, M, K, X = map(int,input().split())

city = [ [] for i in range(N+1)]
# N 도시 개수
# X 출발
# 최단거리가 K
visited = [False] * (N+1)
ans = []
dis = [0] * (N+1)
for i in range(M):
    temp_a, temp_b = map(int, input().split())
    city[temp_a].append(temp_b)
# print(city)
bfs(X)

if not ans:
    print(-1)
else:
    ans.sort()
    for i in ans:
        print(i)



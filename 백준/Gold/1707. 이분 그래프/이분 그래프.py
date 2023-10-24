from collections import deque


def bfs(start, col):
    # global visited, distance
    global is_bin
    # visited[start] = True
    colour[start] = True
    q = deque()
    q.append(start)
    colour[start] = col
    while q:
        here = q.popleft()
        paint = colour[here] % 2 + 1
        for next in connect[here]:
            if colour[next] == 0:
                # 미방문 case
                visited[next] = True
                colour[next] = paint
                q.append(next)

            elif colour[next] != paint:
                # 같으면 문제 없다. 다음 색깔이 다르다면 문제가 되니까
                is_bin = False
                return
    else:
        return






K = int(input())
for t in range(K):

    V, E = map(int, input().split())
    # V : 정점의 개수
    # E : 간선 의 개수

    # d % 2 = 1 : 1
    # d % 2 = 0 : 0

    connect = [[] for _ in range(V+1)]

    for i in range(E):
        v1,v2 = map(int, input().split())
        connect[v1].append(v2)
        connect[v2].append(v1)
    visited = [False]*(V+1)
    # distance = [0] * (V+1) # 폐기, 쓸모 없음
    colour = [0] * (V+1)
    is_bin = True
    # print(connect)
    # print(visited)
    # 정점은 1 부터
    for j in range(1,1+V):
        if not visited[j]:
            bfs(j, 1)

    if is_bin:
        print('YES')
    else:
        print('NO')
N,M = map(int, input().split())
lst = []
for i in range(M):
    lst.append(list(map(int, input().split())))
# print(lst)
frnd = [[] for _ in range(N)]
# print(frnd)
for i in lst:
    frnd[i[0]].append(i[1])
    frnd[i[1]].append(i[0])
# print(frnd)

cnt = 0
visited = [False]*N
# 시작점이 다시 호출받는지 확인해보자
A = False
def dfs(start, cnt):
    global A
    if cnt == 5:
        A = True
        return
    for i in frnd[start]:
        if not visited[i]:
            visited[i] = True
            dfs(i, cnt+1)
            visited[i] = False

for i in range(N):
    visited[i] = True
    # dfs(i,1)
    dfs(i, 1)
    if A:
        print(1)
        break
    visited[i] = False
else:
    print(0)

# cnt = 1
#     visited = [False] * N
#     while st:
#         cnt+= 1
#         if cnt == 5 :
#             return 1
#         c = st.pop()
#         # if visited[i]== False:
#         #     visited[i] = True
#         for i in c:
#             if not visited[i]:
#                 st.append(frnd[i])
#                 visited[i] = True
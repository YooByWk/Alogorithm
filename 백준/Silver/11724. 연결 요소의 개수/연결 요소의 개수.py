import sys
input = sys.stdin.readline

N, M = map(int,input().split())
lst= []
for i in range(M):
    lst.append(list(map(int,input().split())))
cnct = [[] for _ in range(N+1)]
# print(cnct)
for i in lst:
    cnct[i[0]].append(i[1]) # 연결 노드
    cnct[i[1]].append(i[0])
visited = [False] * (N+1)
visited[0] = True
# print(visited)
cnt = 0
# print(cnct)

def dfs(S):
    global cnt
    st = []
    # k = st.pop(S)
    visited[S] = True
    st.append(S)
    while st:
        k = st.pop()
        # st.append(k)
        if not visited[k]:
            visited[k] = True

        for w in cnct[k]:
            if not visited[w]:
                st.append(w)
    # cnt += 1

for i in range(1,N+1):
    # print(visited[i])
    if visited[i] == False:
        if not cnct[i]:
            dfs(i)
            cnt +=1
        else:
            dfs(i)
            cnt += 1
print(cnt)
# print(visited[3] == True)

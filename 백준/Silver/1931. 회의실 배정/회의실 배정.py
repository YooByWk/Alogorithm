
N = int(input())
table = []
for i in range(N):
    table.append(list(map(int, input().split())))
table.sort(key = lambda x : x[0]) # 시작 시간 기준 정렬
# print(table)
table.sort(key = lambda x : x[1])  # 람다 함수를 이용한 뒷자리 기준 정렬
# print(table)  # 디버그
ans = 1
fin = table[0][1]
for i in range(1,N):
    if fin <= table[i][0]:
        ans += 1
        fin = table[i][1]
print(ans)
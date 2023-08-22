# 단어정렬 백준

N = int(input())
lst = [[] for _ in range(51)]
arr =[]
# print(lst)
for i in range(N):
    st = input()
    if not st.isdigit():
        lst[len(st)].append(st)
for i in lst:
    if i:
        i.sort()
for i in lst:
    if i:
        for j in i:
            if j not in arr:
                arr.append(j)
print(*arr, sep ='\n')

# 글자수별로 모으기
# 글자수별로 모은 후 정렬하기
# 정렬하고 합치기
# 출력하기

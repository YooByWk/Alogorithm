# from itertools import combinations
#
lst =[0,1,2,3,4,5,6,7,8,9]  #  조합용 리스트
# # max = 9876543210
# ans = []
# for i in range ( 2**10 -1):
#     list(combinations(lst, i))
def com(lst, n): # 어디선가 긁어온 조합. 따로 다시 분석해보기
    res = []  

    if n == 0 :
        return [[]]

    for i in range(0, len(lst)):
        el = lst[i]
        lft = lst[i +1:]
        for c in com(lft, n-1):
            temp = sorted([el]+c,reverse=True)  # 역순으로 정렬해서 리스트에 들어간다.
            res.append(temp)

    return res




# for t in range(int(input())):
# print(com(lst,2))
ans = [] # 정답용 이었으나 정답의 임시의 임시

for i in range(1,10+1): #  n개의 원소만 나오므로,10까지 다 만들어서 넣어버리자.
    ans += com(lst,i) 
# print(len(ans)) # 디버그
# print(ans[]) # 디버그
tt = [] # 임시용
for i in ans:
    tmp ='' # 문자열로 바꾸고 
    for j in range(len(i)):
        tmp += str(i[j]) # 합쳐서 한개 숫자로 만들고, (역방향 정렬 했으니까) 
    tt.append(tmp) # 잠시 넣어둔다.
ak = [] # 정리하려구요 숫자 크기순으로
for i in tt:
    ak.append(int(i)) # 정수로 넣고 
ak.sort() # 정리하고
asdf = int(input()) #이제서야 입력받음
if asdf > 1022: # 1023개까지임 (idx = N-1)
    print(-1) # 넘어버렸으면, -1개. 노가다 해 본 결과 조합 최대 개수임.
else:
    print(ak[asdf])


# print(ans)
# print(len(ans))
# print(ans[18])

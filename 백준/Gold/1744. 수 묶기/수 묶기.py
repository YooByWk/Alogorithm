# T= int(input())
# lst = []
# for t in range(T):
#     lst.append(int(input()))
# lst.sort()
# res = 0
# new = []
# job = False
# if T == 1:
#     print(lst[0])
#     job = True
# elif T % 2 == 1: # 홀수
#     for i in range(T-1,0,-2):
#         if lst[i]*(lst[i-1]) > 1 :
#             new.append(lst[i]*(lst[i-1]))
#         elif lst[i] == 0 and lst[i-1] < 0:
#             new.append(lst[i]*lst[i-1])
#         else:
#             new.append(lst[i])
#             new.append(lst[i - 1])
#
# else: # 짝수 케이스
#     for i in range(T-1,-1,-2):
#         # print(i)
#         if (lst[i]*(lst[i-1])) > 1 :
#             # 분기를 바꿔서 0이랑 마이너스가 나오는 부분에서 다시. 해본다.
#             # 아마 그러면 될 듯
#             new.append(lst[i]*(lst[i-1]))
#         elif lst[i] == 0 and lst[i - 1] < 0:
#             new.append(lst[i] * lst[i - 1])
#         else:
#             new.append(lst[i])
#             new.append(lst[i-1])
# if not job:
#     print(sum(new))
    # 음수가 사람 화나게 함
T= int(input())
p_lst = []
m_lst = []
cnt=  0
the_one = []
for t in range(T):
    k = int(input())
    if k  == 1:
        cnt += 1
    elif k > 1:
        p_lst.append(k)
    elif k <= 0:
        m_lst.append(k)
    # 여기까지가 이제 리스트 만들기
########### 들여쓰기 방지 ###########
# 음수 정렬
m_lst.sort(reverse=True)
# 양수 정방향 정렬
p_lst.sort()
    # 1은 내비두고 ( 이미 덧셈 해버려서 제거됨)
    # 0은 -를 제거하기 위해 음수 리스트에 추가
pN = len(p_lst)
mN = len(m_lst)
if pN % 2 == 0:
    for i in range(0,pN,2):
        cnt += p_lst[i] * p_lst[i+1]
else:
    cnt += p_lst[0]
    for i in range(1,pN,2):
        cnt += p_lst[i] * p_lst[i+1]
if mN % 2  == 0 :
    for i in range(0,mN,2):
        cnt += m_lst[i] * m_lst[i+1]
else:
    cnt += m_lst[0]
    for i in range(1,mN,2):
        cnt += m_lst[i] * m_lst[i+1]
print(cnt)


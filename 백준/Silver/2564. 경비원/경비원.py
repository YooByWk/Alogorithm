def distancia(a,b):
    # 원점에서 좌표 구하죠 그냥?
    # 1 북 2 남 3 서 4 동
    dis = 0
    if a == 1: # N
        dis = N + b
        return  dis
    elif a == 2 : # S
        dis += b
        return  dis
    elif a == 3 : # W
        dis = N-b
        return  dis
    elif a == 4: # E
        if b//2 > N//2:
            dis = M + b
            return  dis
        else:
            dis = M + abs(b - N)
            return  dis
# 원점에서 가게 까지 거리는 구했음
# 동근이 서있는 곳 확인하고 거리 구하기.
# 혹은 원점을 동근이 기준으로 변경하기. # 이게 더 좋아보임
def distance(a,b,mx,my):
    # global diss
    dis = 0
    if a == mx:
        dis = abs(b - my)
        return dis
    else:
        if a < 3 and mx < 3: # 서로 1, 3
            dis = min((b + my), (2*M - b - my)) + N
            return dis
        elif a > 2 and mx > 2: # 서로 2, 4
            dis = min((b + my),(2*M-b-my)) + M
            return dis

        else: #(무조건 삼각형임)
            if a ==1 and mx ==3:
                dis = b + my
                return dis
            elif a== 1 and mx == 4:
                dis = M-b  + my
                return dis
            elif a == 2 and mx == 3:
                dis = b + N - my
                return dis
            elif a == 2 and mx == 4:
                dis = M-b + N - my
                return dis
            elif a == 3 and mx == 1:
                dis = b + my
                return dis
            elif a == 3 and mx == 2:
                dis = N - b + my
                return dis
            elif a == 4 and mx == 1:
                dis = b + M - my
                return dis
            elif a == 4 and mx == 2:
                dis = N - b  + M - my
                return dis



def test(dis, a, b, mx, my):
    disk = 0
    if a == mx:
        disk = abs(b - my)
    else:
        if a < 3 and mx < 3:
            if M-my > my:
                disk = M-my + N +1
            disk = min((M-my),(my)) + N + min((M-b), b)
        # 두개를 뺀 값이 절반보다 크면 반대로 도는게 이득
        elif a > 2 and mx > 2:
            disk = min()


# 동근이의 좌표  X
diss = 0
M, N = map(int, input().split())
nums = int(input())
shops=[]
# 얘는 중간 샛길 없음
for i in range(nums):
    shops.append(list(map(int, input().split())))
# print(shops)
mx,my =(map(int,input().split()))
# for i in shops:
#     print(i)
ans = 0
for i,j in shops:
    ans += (distance(i, j,mx,my))
print(ans)
# print('-----------')
# print(distancia(i,j))
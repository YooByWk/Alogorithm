N = int(input())
Llst = []
Hlst = []
info = []

# 기둥 정보 입력 받기
for t in range(N):
    L, H = map(int, input().split())
    Llst.append(L)
    Hlst.append(H)
    info.append((L, H))

longitud = max(Llst) - min(Llst) + 1
Total = longitud * max(Hlst)

# 가장 높은 기둥과 그 위치 찾기
MaxL = Llst[Hlst.index(max(Hlst))]
MaxH = max(Hlst)

# 기둥 정보 정렬
info.sort()

# 현재 위치 초기화
cur_L = info[0][0]
cur_H = info[0][1]
rcur_L = info[-1][0]
rcur_H = info[-1][1]

# 왼쪽에서 오른쪽으로 가면서 면적 계산
for i in range(1, len(info)):
    if info[i][1] > cur_H:
        # 왼쪽에서 높이가 증가하는 구간 처리
        Total -= ((MaxH - cur_H) * (info[i][0] - cur_L))
        cur_L = info[i][0]
        cur_H = info[i][1]
    if cur_L >= MaxL:
        break

# 오른쪽에서 왼쪽으로 가면서 면적 계산
for i in range(len(info) - 2, -1, -1):
    if info[i][1] > rcur_H:
        # 오른쪽에서 높이가 증가하는 구간 처리
        Total -= (MaxH - rcur_H) * (rcur_L - info[i][0])
        rcur_L = info[i][0]
        rcur_H = info[i][1]
    if rcur_L <= MaxL:
        break

print(Total)

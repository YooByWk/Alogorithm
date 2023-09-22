# 격자판의 숫자 이어 붙이기

# 0 시작 : > 0으로도 시작되는군! : 문자열
# 요구 조건 :
# 가지치기 불가능
# 무조건 일곱 자리 수를 다 해봐야 함.
# 완전 탐색을 해야 함

# 서로 다른 일곱 자리 수들의 개수

T = int(input())

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]


# 특정 위치를 기점으로 상하좌우 문자를 붙여야 하므로
# 파라미터로 x, y 좌표값을 받아야 한다.


def dfs(y, x, number):
    if len(number) == 7:
        # 추가적인 작업
        result.add(number)
        return
    for k in range(4):
        ny = y + dy[k]
        nx = x + dx[k]

        # 갈 수 없다면 continue
        if ny < 0 or ny >= 4:
            continue

        if nx < 0 or nx >= 4:
            continue

        # 갈 수 있다면, 다음 위치로 ㄱㄱ
        dfs(ny, nx, number + maps[ny][nx])

for tc in range(1, T + 1):
    # 서로 다른 수를 합친다. => 문자열이 더 좋다
    maps = [input().split() for _ in range(4)]

    # 7자리 수를 중복 제거하여 저장
    result = set()

    # 시작지점 모두 봐야죠 뭐
    for i in range(4):
        for j in range(4):
            dfs(i,j, maps[i][j])
    print(f'#{tc} {len(result)}')
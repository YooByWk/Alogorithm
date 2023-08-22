T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    lista = [list(map(int, input().split())) for _ in range(N)]
    # a = list(map(int, input().split())) #근데 리스트는 만들었어요
    # lista.append(a) # 저는 이걸 이쁘게 받는 방법을 모르겠습니다.
    # print(lista)
    maximo = 0
    for r in range(N): # 2차원 배열 탐색
        for c in range(M):  # 2차원 배열 탐색
            n = lista[r][c]  # 2차원 배열
            s = 0  # 풍선 개수
            # print(n,'n',r,c)
            s += n   # 그 선택한 자리만큼 숫자 더해줘야 하니까
            # print(s,'s')
            # dr = [n, -n, 0, 0]  # 실험 주석이었음
            # dc = [0, 0, -n, n]  # 실험 주석이었음 2
            for j in range(1, n + 1):  # 풍선 선택헀을때 터지면 그 안의 숫자만큼 퍼지니까
                dr = [j, -j, 0, 0]  # 이런 구조가 싫다면
                dc = [0, 0, -j, j] # dr,dc in (1,0),(0,1),(-1,0),(0,-1)로 잡고 n을 매번 곱해주는 방법도 있다.
                for i in range(4):  # n은 풍선 터진 숫자. 델타는 시작이 1이므로, 레인지는 1부터 n+1 까지
                    nr = r + dr[i]
                    nc = c + dc[i]  # 새로운 위치를 잡자.
                    # print(nr, nc)
                    if 0 <= nr < N and 0 <= nc < M: # 나가지 않게 조건을 걸어준다.
                        s += lista[nr][nc]
                        # print(s)
                    if maximo < s:  # 이거 이제 할 줄 알죠?
                        maximo = s
    # print(lista)

    #         for d in range(4):
    #             nR = r + direccion_R[d]
    #             nC = c + direccion_C[d]
    #             if 0<=nR<N and 0 <= nC<N:
    #                 s += lista[nR][nC]
    #         if s < maximo :
    # s = maximo
    print(f'#{t} {maximo}')
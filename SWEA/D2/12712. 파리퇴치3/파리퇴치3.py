T = int(input())
for t in range(1,T+1):
    N, M = map(int, input().split())  # N은 배열, M은 스프레이의 세기
    # set Delta here
    crossR = [-1, 1, 1, -1]  # X 델타
    crossC = [-1, -1, 1, 1]  # X 델타
    plusR = [-1, 0, 1, 0]  # + 델타
    plusC = [0, 1, 0, -1]  # + 델타
    max_killP = 0
    max_killX = 0
    # hacer lista de los moscos
    fly = [list(map(int, input().split()))for _ in range(N)]
    # Desde aquí buscar el maximo
    for r in range(N):
        # tempX = 0 # para guardar el número de los moscos matado. de la X
        # tempP = 0 # para guardarlo de la forma +
        for c in range(N):
            tempX = fly[r][c] # Donde elegiremos
            tempP = fly[r][c]
            for j in range(1, M):
                for k in range(4): # no es necesario usar más que 4, porque tenemos solo 4 números en la lista de Delta
                    ncR = r + crossR[k] * j  # configurar
                    ncC = c + crossC[k] * j  # delta
                    npR = r + plusR[k] * j
                    npC = c + plusC[k] * j
                    if 0<= ncR < N and 0<= ncC < N:  # para ver X
                        tempX += fly[ncR][ncC]
                    if max_killX < tempX: # si max es ma' peqn, se cambian en X
                        max_killX = tempX
                    if 0<= npR < N and  0<= npC < N:
                        tempP += fly[npR][npC]
                    if max_killP < tempP:
                        max_killP = tempP
    if max_killP > max_killX: # comparar
        max_kill = max_killP
    else:
        max_kill = max_killX
    print(f'#{t} {max_kill}') 
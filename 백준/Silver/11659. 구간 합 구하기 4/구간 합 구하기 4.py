# N개의 수 i~j까지 수를 합한다.
# 수량 N 더해야하는 횟수 M
# N개 나옴
import sys

n, m = map(int, sys.stdin.readline().split())

lista = list(map(int, sys.stdin.readline().split()))

# for i in range(m):
#     rango = list(map(int, sys.stdin.readline().split()))
#     temporal = lista[rango[0]-1:rango[1]]
#     print(sum(temporal)) 시간초과


##
ts = 0
primero = [0]


for i in range(n):
    ts = ts + lista[i]
    primero.append(ts)
# print(primero) 실험

for i in range(m):
    inicio, termino = map(int, sys.stdin.readline().split())
    print(primero[termino]- primero[inicio-1])




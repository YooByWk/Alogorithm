def f(x):
    if x == p[x]:
        return x
    p[x] = f(p[x])
    return p[x] # p 합쳐주기?


def u(x,y):
    x = f(x)
    y = f(y)
    if x != y:
        p[y] = x




N,M =  map(int, input().split())
# 0 : 합집합 a, b : a가 포함된 집합과 b가 포함된 집합을 합?침
# 1 : 두 원소가 같?은지? 확?인
p = [asdf for asdf in range(N+1)]
# print(p)
for _ in range(M):
    op, a, b = map(int, input().split())
    if op == 0 :
        u(a,b)
    else:
        # chequea dos numeros si tienen mismo padre o no
        if f(a) == f(b):
            print('yes')

        else:
            print('no')


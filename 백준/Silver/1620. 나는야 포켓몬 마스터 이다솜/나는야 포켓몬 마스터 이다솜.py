N,M = map(int,input().split())

# 문제의 수 M
# 포켓몬의 수 N

# 여기서부터 N 개의 줄의 포켓몬이 들어온다.
poke = {}
poke2 = {}
for i in range(N):
    a = input()
    poke[i+1] = a
    poke2[a] =  i+1
# print(poke)
# print(poke2.get('Ivysaur'))
for m in range(M):
    ans = input()
    if not ans.isalpha():
        print(poke.get(int(ans)))
    else:
        print(poke2.get(ans))

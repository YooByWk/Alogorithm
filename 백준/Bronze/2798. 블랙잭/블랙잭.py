N, M = map(int, input().split())
cards = list(map(int, input().split()))
T_T = 0
for i in range(N):
    for j in range(i+1,N):
        for k in range(j+1,N):
            if cards[i] + cards[j] + cards[k] >M:
                continue
            else:
               if  T_T < cards[i] + cards[j] + cards[k]:
                   T_T = cards[i] + cards[j] + cards[k]
print(T_T)
N, K = map(int,input().split())
coins = []
for i in range(N):
    coins.append(int(input()))
test = []
cnt = 0
for i in coins[::-1]:
    if i <= K:
        test.append(i)
        cnt += K // i
        K = K % i

print(cnt)

N, K = map(int, input().split())
ans = 0
temp = 1
for i in range(1,K+1):
    temp = temp * (N-i+1) // i
print(temp)
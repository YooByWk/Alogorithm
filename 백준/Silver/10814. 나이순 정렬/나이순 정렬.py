T = int(input())
lst = []
sm = 123781
for t in range(T):
    k = (list(input().split()))
    lst.append(k)
    if int(k[0]) < sm:
        sm = int(k[0])
cnt = 0
while cnt != T:
    for j in range(T):
        if int(lst[j][0]) == sm:
            print(*lst[j])
            cnt += 1
    sm +=1


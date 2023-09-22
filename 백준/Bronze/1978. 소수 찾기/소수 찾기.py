N = int(input())
check = list(map(int, input().split()))
cnt =0
for i in check:
    if i == 0 or i == 1:
        continue
    j = 2
    while i % j != 0:
        j = j + 1

    else:
        if i == j:
            cnt +=1
print(cnt)
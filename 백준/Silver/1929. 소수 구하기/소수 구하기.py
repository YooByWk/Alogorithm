M,N=map(int,input().split())
lst = [True] * (N+1)
lst[0] = False
lst[1] = False
# print(lst)

for i in range(2,int(N **(0.5))+1):
    if lst[i] :
        for j in range(1,N//i+1) :
            if i*j <= N:
                lst[i*j] = False
        lst[i] =True
for i in range(M,N+1):
    if lst[i]:
        print(i)


N = int(input())
lst = [0,0]
for _ in range(N):
    lst[int(input())] += 1
# print(lst)
if lst[0] > lst[1]:
    print("Junhee is not cute!")
else:
    print("Junhee is cute!")
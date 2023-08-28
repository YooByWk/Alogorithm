import sys
input = sys.stdin.readline


def bianry(lst,key):
    low = 0
    high = len(lst)-1
    midd = (low +high) // 2
    while low <= high:
        midd = (low + high) // 2
        if key == lst[midd]:
            return 1

        elif key > lst[midd]:
            low = midd+1
        else: # key가 더 작음
            high = midd -1
    return 0 # 없음

N = int(input())
lst = list(map(int, input().split()))
M = int(input())
check = list(map(int, input().split()))

lst.sort()
for ke in check:
    print(bianry(lst,ke))


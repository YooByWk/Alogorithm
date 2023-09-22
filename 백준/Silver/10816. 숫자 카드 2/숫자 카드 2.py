import sys

input = sys.stdin.readline
N = int(input())
plst = [0] * 20000001
# mlst = [0] * 20000001
fst = list(map(int, input().split()))
# print(fst)
for i in fst:
    plst[i + 10000000] += 1
M = int(input())
# print(plst[10000006])
scd = list(map(int, input().split()))
for j in scd:
    print(plst[j + 10000000], end= " ")



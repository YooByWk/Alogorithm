from queue import PriorityQueue
import sys
input = sys.stdin.readline
lst = PriorityQueue()
k = int(input())
for  i in range(k):
    lst.put(int(input()))
cnt = 0

if k == 1:
    print(0)
else:
    for i in range(k-1):
        temp1 = lst.get()
        temp2 = lst.get()
        tsum = temp1 + temp2
        cnt += tsum
        lst.put(tsum)
    print(cnt)
# 10866 deque
import sys
input = sys.stdin.readline
from collections import deque

orden = int(input())
lst =deque()
for i in range(orden):
    order = input().split()
    # print(order)
    if order[0] == 'push_back':
        lst.append(order[1])
    elif order[0] == 'push_front':
        lst.appendleft(order[1])
    elif order[0] == 'pop_front':
        if lst:
            print(lst.popleft())
        else:
            print(-1)
    elif order[0] == 'pop_back':
        if lst:
            print(lst.pop())
        else:
            print(-1)
    elif order[0] == 'size':
        print(len(lst))
    elif order[0] == 'empty':
        if not lst:
            print(1)
        else:
            print(0)
    elif order[0] == 'front':
        if lst:
            print(lst[0])
        else:
            print(-1)
    elif order[0] == 'back':
        if lst:
            print(lst[-1])
        else:
            print(-1)

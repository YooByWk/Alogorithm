# 카드 2
import sys
input = sys.stdin.readline
from collections import deque
#N이 제일 아래에 있어요

N = int(input())
# 1. 제일 위 버림
# 2. 다음 제일 위를 아래로 옮김
#  반복
# 마지막 카드를 말하시오
lst = deque(i for i in range(1,N+1))
while len(lst)> 1:
    lst.popleft()
    top = lst.popleft()
    lst.append(top)

print(lst[0])

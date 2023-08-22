import sys
input = sys.stdin.readline
q = []
for i in range(int(input())):
    k = list(input().split())
    if k[0] == 'push':
        q.append(k[1])
    elif k[0] == 'pop':
        if q:
            p = q.pop(0)
            print(int(p))
        else:
            print(-1)
    elif k[0] == 'size':
        print(len(q))
    elif k[0] == 'empty':
        if q:
            print(0)
        elif not q:
            print(1)
    elif k[0] == 'front':
        if q:
            print(q[0])
        elif not q:
            print(-1)
    elif k[0] == 'back':
        if q:
            print(q[-1])
        elif not q:
            print(-1)
import sys
input = sys.stdin.readline
# 백준 스택
st = []
for i in range(int(input())):
    k = list(input().split())
    if k[0] == 'push':
        st.append(k[1])
    elif k[0] == 'pop':
        if st:
            p = st.pop()
            print(int(p))
        else:
            print(-1)
    elif k[0] == 'size':
        print(len(st))
    elif k[0] == 'empty':
        if st:
            print(0)
        elif not st:
            print(1)
    elif k[0] == 'top':
        if st:
            print(st[-1])
        elif not st:
            print(-1)

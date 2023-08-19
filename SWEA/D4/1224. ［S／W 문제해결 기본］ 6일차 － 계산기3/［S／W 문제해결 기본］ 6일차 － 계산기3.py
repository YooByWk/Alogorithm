T  = 10
for t in range(1,1+T):
    N = int(input()) # 테스트 케이스의 길이
    char = input()
    nums = '0123456789'
    pat = '()'
    stack = []
    fix = ''
    for c in char:
        if c in nums:
            fix += c
        else:
            if c == '(':
                stack.append(c)
            elif c == ')':
                while stack[-1] != '(' and len(stack) != 0:
                    fix += stack.pop()
                stack.pop()
            elif c == '*':
                while (stack[-1] != '+' and len(stack)) != 0:
                    if stack[-1] == '(':
                        break
                    else:
                        fix += stack.pop()
                stack.append(c)
            elif c == '+':
                while len(stack) != 0 and stack[-1] != '(':
                    fix += stack.pop()
                stack.append(c)
    while len(stack):
        fix += stack.pop()
    # print(fix)
    st = []
    res = 0
    for c in fix:
        if c in nums:
            st.append(c)
        else:
            if c == '+':
                v2 = st.pop()
                v1 = st.pop()
                res = int(v2) + int(v1)
                st.append(res)
            elif c == '*':
                v2 = st.pop()
                v1 = st.pop()
                res = int(v2) * int(v1)
                st.append(res)

    print(f'#{t} {res}')
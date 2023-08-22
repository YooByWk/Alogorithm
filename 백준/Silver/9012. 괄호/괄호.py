def ans(s):
    for i in s:
        if i == '(':
            st.append(i)
        else:
            if st:
                st.pop()
            else:
                return 'NO'
    if len(st) == 0:
        return 'YES'
    else:
        return 'NO'
T = int(input())
for t in range(1,T+1):
    st = []
    s = input()
    test = len(s)
    num = 1
    idx = 0
    # for i in s:
    #     if i == '(':
    #         st.append(i)
    #     else:
    #         if st:
    #             st.pop()
    #         else:
    #             break
    # if len(st) == 0:
    #     print('YES')
    # else:
    #     print('NO')

    print(ans(s))
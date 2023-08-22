t = []
n = int(input())

st=[]
st.append(1)
# print(t)
def ans():
    idx = 0
    num = 1
    st = []
    r = []
    # st.append(num)
    # num += 1
    # r.append('+')
    for i in range(n):
        # t.append(int(input()))
        t = int(input())
        while t>= num:
            st.append(num)
            num += 1
            r.append('+')
        if st[-1] == t:
            st.pop()
            r.append('-')
            idx += 1
            # if idx == n:
            # return r
            # else:
            #     st.append(num)
            #     num += 1
            #     r.append('+')
        else:
            return 'NO'
    return r
k = ans()
if k =='NO':
    print(k)
else:
    print(*k, sep='\n')
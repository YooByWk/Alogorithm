function solution(s) {
    const st = []
    
    for (const char of s) {
        if (st.length > 0 && char === st[st.length -1]) {
            st.pop()
        } else {
            st.push(char)
        }
    }
    
    
    return st.length === 0 ? 1 : 0 ;
}
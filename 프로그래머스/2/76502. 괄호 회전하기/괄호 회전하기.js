function solution(s) {
    const sLen = s.length;
    let answer = 0
    
    if (sLen % 2 !== 0) return 0;
    
    for (let x = 0; x< sLen ; x++) {
        const rotated = s.substring(x) + s.substring(0,x)
        
        if (checkCorrect(rotated)) {
            answer++
        }
    }
    return answer
}

function checkCorrect(s) {
    const st = []
    const PAIRS = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (const char of s) {
        if (char === "(" || char === "[" || char === "{" ) {
            st.push(char)
        } else if (char === ")" || char === "}" || char ==="]") {
            if (st.length === 0) {
                return false
            }
            const last = st.pop();
            if (last !== PAIRS[char]) {
                return false
            }
        }
    }
    return st.length === 0
}
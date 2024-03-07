function solution(code) {
    var answer = '';
    let mode = true
    code = [...code]
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = !mode
            continue
        }
        if (mode === true) { // 모드가 0일 때
            if (i % 2 === 0) { // 짝수
                answer += code[i]
            } 
        } else // 모드가 1일 때
        if (i % 2 === 1 ) { // 홀수
            answer += code[i]
        } 
    }
    if (answer === '') {
        answer = 'EMPTY'
    }
    return answer;
}
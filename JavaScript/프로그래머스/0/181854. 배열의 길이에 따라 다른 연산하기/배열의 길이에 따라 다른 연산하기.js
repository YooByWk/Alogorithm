function solution(arr, n) {
    var answer = [];
    // 홀수라면 arr 짝수에 n 을 더함
    // 짝수라면 arr 홀수에 n을 더함
    let arrLen = arr.length
    
    if (arrLen % 2 === 0) {
        // 짝수
        answer = arr.map((el,idx) => {
            if (idx % 2 === 1) {
                return el + n    
            }
            return el
        })
    } else {
        // 홀수
        answer = arr.map((el, idx) => {
            if (idx % 2 === 0 ) {
                return el + n
            }
            return el
        })
    }
    
    return answer;
}
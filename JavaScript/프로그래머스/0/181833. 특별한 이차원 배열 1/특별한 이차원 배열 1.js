function solution(n) {
    var answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        answer[i] = new Array(n).fill(0)
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                answer[i][j] = 1
            }
        }
    }
    return answer;
}
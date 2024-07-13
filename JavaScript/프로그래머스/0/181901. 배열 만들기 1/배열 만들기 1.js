function solution(n, k) {
    var answer = [];
    let i = 1
    while (i <= n) {
        if (i % k === 0 ) {
            answer.push(i)
        }
        i++
    }
    return answer;
}
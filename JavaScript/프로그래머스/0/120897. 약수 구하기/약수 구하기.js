function solution(n) {
    var answer = [];
    let i = 1
    while (i <= Math.sqrt(n) ) {
        if (n % i === 0) {
            answer.push(i)
            if (n / i !== i) {
                answer.push(n / i)
            }
        }
            i++
        
    }
    return answer.sort((a,b) => (a-b));
}
function solution(n) {
    var answer = [];
    let i = 1
    while (i <= n) {
        if (i % 2 === 1) {
         answer.push(i)   
        }
        i++ 
    }
    return answer;
}
function solution(n) {
    var answer = [];
    let i = n
    answer.push(i)
    while(i !== 1) {
        if (i % 2 === 1 ) {
            i = 3 * i + 1
        }
        else {
            i = i / 2 
        }
        answer.push(i)
    }
    return answer;
}
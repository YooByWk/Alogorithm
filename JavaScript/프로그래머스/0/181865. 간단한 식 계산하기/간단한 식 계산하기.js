function solution(binomial) {
    var answer = binomial.split(' ');
    let [a, op, b] = answer
    if (op === '*') { return a * b }
    if (op === '-') { return a - b }
    if (op === '+') { return +a + +b }
    
    
}
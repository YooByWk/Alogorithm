const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
    const operations = input[i].split(' ');
    
    let currentNum = Number(operations[0]);
    
    for (let j = 1; j < operations.length; j++) {
        const operator = operations[j];
        
        if (operator === '@') {
            currentNum *= 3; // 3 곱하기
        } else if (operator === '%') {
            currentNum += 5; // 5 더하기
        } else if (operator === '#') {
            currentNum -= 7; // 7 빼기
        }
    }
    
    result += currentNum.toFixed(2) + '\n';
}

console.log(result);
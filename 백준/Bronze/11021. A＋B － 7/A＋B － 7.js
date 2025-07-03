const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let result = ''; 
for (let i = 1; i <= T; i++) {
    const numbers = input[i].split(' ').map(Number);
    const A = numbers[0];
    const B = numbers[1];
    const sum = A + B;
    result += `Case #${i}: ${sum}\n`;
}
console.log(result);
const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[1]);
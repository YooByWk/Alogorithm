const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    function printTriangle(num) {
        for (let i = 1; i <= num; i++) {
            console.log('*'.repeat(i));
        }
    }
    printTriangle(n);
});

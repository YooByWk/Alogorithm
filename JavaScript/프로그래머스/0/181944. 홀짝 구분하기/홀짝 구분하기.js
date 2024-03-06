const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let x = n % 2 
    switch( x ) {
        case 0:
            console.log(n, 'is even');
            break;
        case 1:
            console.log(n, 'is odd');
            break;
    }
    
        
});
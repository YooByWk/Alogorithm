const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
    
    const N = BigInt(input[0]);
    const M = BigInt(input[1]);
    const quotient = N / M;
    
    const remainder = N % M;

    console.log(quotient.toString());
    console.log(remainder.toString());
}

solve();
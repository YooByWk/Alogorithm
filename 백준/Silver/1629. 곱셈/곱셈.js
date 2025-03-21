const fs = require("fs");
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt); 

function power(a, b) {
  if (b === 1n) return a % C;
  
  let temp = power(a, b / 2n);
  temp = (temp * temp) % C;

  if (b % 2n === 0n) {
    return temp;
  } else {
    return (temp * a) % C;
  }
}

console.log(power(A, B).toString());

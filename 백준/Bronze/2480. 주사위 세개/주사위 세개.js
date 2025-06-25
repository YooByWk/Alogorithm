const input = require("fs")
  .readFileSync("/dev/stdin")
  // .readFileSync("./2480")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const [a, b, c] = input

let ans = 0

if (a === b && b === c) {
  ans = 10000 + a * 1000
} else if (a === b || b === c || a === c) {
  if (a === b) {
    ans = 1000 + a * 100
  } else if (b === c) {
    ans = 1000 + b * 100
  } else {
    ans = 1000 + a * 100
  }
} else {
  const maxNum = Math.max(a, b, c)
  ans = maxNum * 100
}

console.log(ans)

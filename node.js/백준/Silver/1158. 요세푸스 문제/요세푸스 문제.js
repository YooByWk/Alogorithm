const fs = require("fs")

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const arr = Array.from({ length: input[0] }, (_, i) => i + 1)

const answer = []
let cnt = 1

while (arr.length) {
  if (cnt === input[1]) {
    answer.push(arr.shift())
    cnt = 0
  } else {
    arr.push(arr.shift())
  }
  cnt++
}

console.log(`<${answer.join(", ")}>`)

const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
const NArr = input.map(Number)
// A + B - C 셋다 숫자
console.log(NArr[0] + NArr[1] - NArr[2])
// A  + B - C
console.log(input[0] + input[1] - input[2])

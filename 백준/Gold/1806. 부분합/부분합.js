const fs = require("fs")

const [n, T] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number))

const S = n[1]  // 목표 합

let start = 0
let end = 0 
let len = 1
let maxLen = 1000000  

// 초기 합 설정
let sum = T[0]

while (start < T.length) {
  if (sum < S) { 
    if (end < T.length - 1) {
      end++
      len++
      sum += T[end]
    } else {
      break
    }
  } else { 
    if (maxLen > len) {
      maxLen = len
    }
    sum -= T[start]
    start++
    len--
  }
}

console.log(maxLen === 1000000 ? 0 : maxLen)

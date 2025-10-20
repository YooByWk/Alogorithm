const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = input[0]
const arr = input[1].split(" ").map(Number)
const T = Number(input[2])

let answer = 0
let left = 0
let right = N - 1

arr.sort((a, b) => a - b)

while (left < right) {
  const curSum = arr[left] + arr[right]
  if (curSum === T) {
    answer++
    left++
    right--
  } else if (curSum < T) {
    // 현재 합이 목표보다 작다면
    left++
  } else {
    // 현재 합이 목표보다 크다면
    right--
  }
}

console.log(answer)

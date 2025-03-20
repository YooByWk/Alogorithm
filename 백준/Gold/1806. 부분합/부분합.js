const fs = require("fs")

const [firstLine, arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
// N = 수열의 길이
// S = 합이 S 이상
const [N, S] = firstLine.split(" ").map((v) => +v)

const numbers = arr.split(" ").map((v) => +v)

console.log(solution(numbers, S))

function solution(numbers, S) {
  // 투 포인터
  let start = 0
  let end = 0
  let sum = 0
  let minLen = Infinity

  while (end <= numbers.length) {
    // 누적된 합이 S 이상이면
    if (sum >= S) {
      minLen = Math.min(minLen, end - start)
      sum -= numbers[start]
      start++
    }
    // 누적된 합이 S 미만이면
    else if (sum < S) {
      sum += numbers[end]
      end++
    }
  }
  return minLen === Infinity ? 0 : minLen
}

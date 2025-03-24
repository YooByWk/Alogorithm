// 5430 AC

// T, 명령, N, 배열
// D : 첫 수 버림
// RDD : 뒤집고 두 수 버리기

const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const T = input.shift()

for (let i = 0; i < input.length; i = i + 3) {
  const [CMD, N, strArr] = [input[i], input[i + 1], input[i + 2]]
  const arr = strArr !== "[]" ? strArr.slice(1, -1).split(",").map(Number) : []

  console.log(solution(CMD, arr))
}

function solution(cmd, arr) {
  let isReverse = false
  let left = 0
  let right = arr.length

  for (let i = 0; i < cmd.length; i++) {
    const c = cmd[i]
    if (c === "R") {
      isReverse = !isReverse
    }

    if (c === "D") {
      if (isReverse) {
        right--
      } else {
        left++
      }
    }
  }
  if (left > right) {
    return "error"
  }
  return isReverse
    ? "[" + arr.slice(left, right).reverse().join(",") + "]"
    : "[" + arr.slice(left, right).join(",") + "]"
}

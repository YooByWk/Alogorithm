const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

const T = input[0]
const answer = []
for (let i = 1; i <= T; i++) {
  const res = solution(input[i])
  answer.push(res)
}

console.log(answer.join("\n").trim())

function solution(num) {
  let maxNum = num
  let curNum = num
  while (curNum !== 1) {
    if (curNum % 2 === 0) {
      // 짝수
      curNum /= 2
      maxNum = Math.max(maxNum, curNum)
    } else {
      // 홀수
      curNum = curNum * 3 + 1
      maxNum = Math.max(maxNum, curNum)
    }
  }

  return maxNum
}

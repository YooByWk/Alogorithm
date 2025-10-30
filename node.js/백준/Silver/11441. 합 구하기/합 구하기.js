const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const N = parseInt(input[0].trim())
const Nums = input[1].trim().split(" ").map(Number)
const M = parseInt(input[2])
const intervals = input.splice(3).map((s) => s.trim().split(" ").map(Number))

const answer = []

const accArr = []

accArr[0] = 0

let curSum = 0
for (let i = 0; i < N; i++) {
  curSum += Nums[i]
  accArr.push(curSum)
}

for (const interval of intervals) {
  answer.push(solution(...interval, accArr))
}

console.log(answer.join("\n").trim())

/**
 *
 * @param {number} start 구간의 시작
 * @param {number} end  구간의 끝
 * @param {number[]} acc 구간 합 배열
 * @returns {number} res - 결과
 */
function solution(start, end, acc) {
  const accStart = start - 1

  const res = acc[end] - acc[accStart]

  return res
}

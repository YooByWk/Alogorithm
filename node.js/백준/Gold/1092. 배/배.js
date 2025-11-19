const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const N = parseInt(input[0].trim())
const cranes = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)

const M = parseInt(input[2].trim())
const goods = input[3]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)

const ans = solution(N, cranes, M, goods)
console.log(ans)

/**
 * ## 백준 골드 1092 : 배
 *
 * ### [문제 링크](https://www.acmicpc.net/problem/1092)
 *
 * @param {number} N 크레인의 수
 * @param {number[]} cranes 각 크레인의 무게 배열
 * @param {number} M 화물의 수
 * @param {number[]} goods 각 화물의 무게 배열
 * @returns number
 */
function solution(N, cranes, M, goods) {
  const maxGoodW = goods[0]
  const maxCraneW = cranes[0]
  let curTime = 0
  if (maxCraneW < maxGoodW) {
    return -1
  }

  while (goods.length > 0) {
    let craneIdx = 0
    let goodIdx = 0
    curTime++
    while (craneIdx < N && goodIdx < goods.length) {
      if (cranes[craneIdx] >= goods[goodIdx]) {
        goods.splice(goodIdx, 1)
        craneIdx++
      } else {
        goodIdx++
      }
    }
  }

  return curTime
}

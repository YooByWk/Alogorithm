const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const N = parseInt(input[0])
const original = input[1].trim()
const target = input[2].trim()

/**
 * ### 백준 9243 : 파일 완전 삭제
 * [문제 링크](https://www.acmicpc.net/problem/9243)
 * @param {number} n 시행 횟수
 * @param {string} ori 원본
 * @param {string} targ 결과
 * @returns
 */
function sol(n, ori, targ) {
  let tmp = ""
  // 홀수 = 뒤집힘
  // 짝수 = 그대로 나옴
  const exec = n % 2

  if (exec === 0) {
    return ori === targ
  } else {
    for (const char of ori) {
      if (char === "1") {
        tmp += "0"
      } else {
        tmp += "1"
      }
    }
    return tmp === targ
  }
}

const ans = sol(N, original, target) ? "Deletion succeeded" : "Deletion failed"
console.log(ans)

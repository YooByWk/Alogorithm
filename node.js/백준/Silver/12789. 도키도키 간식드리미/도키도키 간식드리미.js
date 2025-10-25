const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const N = parseInt(input[0])
const numbers = input[1].split(" ").map(Number)

const answer = solution(N, numbers) ? "Nice" : "Sad"

console.log(answer)

/**
 * @param{number} N : 학생의 수
 * @param{number[]}  numbers 학생들이 서있는 번호표 배열
 * @returns{boolean} 순서대로 수령 가능한 여부를 판단하여 리턴한다.
 * # 백준 12789 - 도키도키 간식드리미
 */
function solution(N, numbers) {
  const st = new Array(N).fill(0)

  let top = 0
  let curNum = 1

  // 넣어야 하는지 혹은, 바로 수령하는지 확인
  for (let i = 0; i < N; i++) {
    const stNum = numbers[i]

    while (top > 0 && st[top - 1] === curNum) {
      top--
      curNum++
    }

    if (stNum === curNum) {
      curNum++
    } else {
      if (top > 0 && st[top - 1] < stNum) {
        return false
      }

      st[top] = stNum
      top++
    }
  }

  while (top > 0) {
    if (st[top - 1] === curNum) {
      top--
      curNum++
    } else {
      return false
    }
  }

  return true
}

const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const [N, M] = input[0].trim().split(" ").map(Number)
const targetNumbers = input[1].trim().split(" ").map(Number)

// 연결 리스트 안쓰면 손해가 좀 클 것 같다.

// 일단 Array 로 해결해보기로.

const answer = solution(N, targetNumbers)

console.log(answer)

/**
 *
 * ## 백준 1021번
 *
 * [문제 링크](https://www.acmicpc.net/problem/1021)
 * @param {number} N  - 큐의 크기 N
 * @param {number[]} targets
 * @returns {number} answer - 총 최소 움직임을 반환한다.
 */
function solution(N, targets) {
  const q = Array.from({ length: N }, (_, i) => i + 1)

  // 타겟 찾기
  let total_moves = 0

  for (const target of targets) {
    const curQsize = q.length
    const targetIdx = q.indexOf(target)

    const leftMoves = targetIdx
    const rightMoves = curQsize - targetIdx

    if (leftMoves < rightMoves) {
      for (let i = 0; i < leftMoves; i++) {
        const tmp = q.shift()
        q.push(tmp)
        total_moves++
      }
    } else {
      for (let i = 0; i < rightMoves; i++) {
        const tmp = q.pop()
        q.unshift(tmp)
        total_moves++
      }
    }

    q.shift()
  }
  return total_moves
}

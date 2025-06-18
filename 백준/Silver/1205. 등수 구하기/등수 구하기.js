const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, Taesu, P] = input[0].split(" ").map(Number)
let arr = []

if (N > 0) {
  arr = input[1].split(" ").map(Number)
}

console.log(solution(N, Taesu, P, arr))

function solution(N, Taesu, P, arr) {
  if (N === P && Taesu <= arr[N - 1]) {
    return -1
  }

  let rank = 1

  for (let i = 0; i < N; i++) {
    if (arr[i] < Taesu) {
      break
    } else if (arr[i] === Taesu) {
    } else {
      rank++
    }
  }
  return rank
}

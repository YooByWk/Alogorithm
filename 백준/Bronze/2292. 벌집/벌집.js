const fs = require("fs")
const input = parseInt(fs.readFileSync("/dev/stdin").toString())

function solution(t) {
  if (t === 1) return 1

  let layer = 1
  let end = 1

  while (end < t) {
    layer++
    end += (layer - 1) * 6
  }
  return layer
}

console.log(solution(input))

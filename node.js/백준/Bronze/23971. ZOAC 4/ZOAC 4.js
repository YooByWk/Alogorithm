const input = require("fs")
  // .readFileSync("./23971/23971.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number)

const [H, W, N, M] = input

// W 개씩 H 행 세로 N칸 혹은 가로 M을 비워야 한다.

const row = Math.ceil(H / (N + 1))
const col = Math.ceil(W / (M + 1))
const result = row * col
console.log(result)

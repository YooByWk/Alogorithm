const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const [N, K] = input[0].split(" ").map(Number)
const temps = input[1].split(" ").map(Number)
const acc = new Array(N + 1).fill(0)

for (let i = 0; i < N; i++) {
  acc[i + 1] = acc[i] + temps[i]
}

let max_temp = -Infinity

for (let i = K; i <= N; i++) {
  const cur = acc[i] - acc[i - K]
  max_temp = Math.max(cur, max_temp)
}

console.log(max_temp)

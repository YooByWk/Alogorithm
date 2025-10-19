const fs = require("fs")

const N = Number(fs.readFileSync("dev/stdin").toString().trim())

const MAX = 5001

const dp = new Array(N + 1).fill(MAX)

dp[0] = 0

if (N >= 3) {
  dp[3] = 1
}

if (N >= 5) {
  dp[5] = 1
}

for (let i = 6; i <= N; i++) {
  const i3 = dp[i - 3]
  const i5 = dp[i - 5]
  if (i3 === MAX && i5 === MAX) {
    continue
  }
  dp[i] = Math.min(i3, i5) + 1
}

if (dp[N] >= MAX) { 
  console.log(-1)
} else {
  console.log(dp[N])
}
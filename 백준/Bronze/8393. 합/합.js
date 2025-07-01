const fs = require("fs")

const N = Number(
  fs.readFileSync("/dev/stdin").toString().replace(/\r/g, "").trim()
)

let ans = 0
for (let i = 1; i <= N; i++) {
  ans += i
}

console.log(ans)

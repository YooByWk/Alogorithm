const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const [N, M] = input[0].split(" ").map(Number)
const keywords = new Set()

for (let i = 1; i <= N; i++) {
  keywords.add(input[i])
}
let ans = ""
for (let i = N + 1; i <= N + M; i++) {
  const curKeys = input[i].split(",")
  for (let curKey of curKeys) {
    keywords.delete(curKey)
  }
  ans += keywords.size
  ans += "\n"
}

console.log(ans)

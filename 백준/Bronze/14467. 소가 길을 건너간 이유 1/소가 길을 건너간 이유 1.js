const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const N = input[0]

const cows = input.slice(1)
const location = new Array(11)

let ans = 0

for (let i = 0; i < N; i++) {
  const [cow, loc] = cows[i].split(" ").map(Number)

  if (location[cow] !== undefined && location[cow] !== loc) {
    ans++
  }

  location[cow] = loc
}

console.log(ans)

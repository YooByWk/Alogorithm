const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cur = 1
let cnt = 0
let found = false
while (!found) {
  for (const num of input) {
    if (cur % num === 0) {
      cnt++
    }
  }

  if (cnt >= 3) {
    found = true
    break
  }

  cur++
  cnt = 0
}

console.log(cur)

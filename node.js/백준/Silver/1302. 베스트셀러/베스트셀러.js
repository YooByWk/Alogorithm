const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split("\n")

const arr = input.splice(1).map((s) => s.trim())
let check = {}

for (const name of arr) {
  check[name] = (check[name] || 0) + 1
}
let ans = []
let maxCnt = 0
for (const name in check) {
  if (check[name] > maxCnt) {
    ans = [name]
    maxCnt = check[name]
  } else if (check[name] === maxCnt) {
    ans.push(name)
  }
}

console.log(ans.sort()[0])

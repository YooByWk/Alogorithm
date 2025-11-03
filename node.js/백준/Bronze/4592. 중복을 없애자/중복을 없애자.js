// 2025 11 03
const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

let answer = ""

for (const tLine of input) {
  let check
  let line = tLine.trim().split(" ").map(Number)
  const N = line[0]
  targetLine = line.splice(1)
  if (N === 0 && line.length === 1) {
    console.log(answer.trim())
    break
  }

  for (const num of targetLine) {
    if (check === num) {
      continue
    } else {
      check = num
      answer += `${num} `
    }
  }
  answer += "$\n"
}

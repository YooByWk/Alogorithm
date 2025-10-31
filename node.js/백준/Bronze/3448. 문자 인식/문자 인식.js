const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().split("\n")

const N = parseInt(input[0])
const lines = input.splice(1)
lines.push("")
let len = 0
let read = 0
let ans = []

for (const line of lines) {
  if (line === "") {
    if (len <= 0) continue

    // 다음 줄에서 초기화
    const cal = ((read / len) * 100).toFixed(1)
    len = 0
    read = 0

    let format
    if (cal.endsWith(".0")) {
      format = cal.slice(0, -2)
    } else {
      format = cal
    }
    ans.push(format)
  }
  len += line.length
  read += line.replace(/\#/g, "").length
}

for (const a of ans) {
  console.log(`Efficiency ratio is ${a}%.`)
}

const fs = require("fs")

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const vc = /[^aeiou]/gi
const ans = []

for (let line of input) {
  if (line === "#") {
    console.log(ans.join("\n"))
  } else {
    const len = line.replace(vc, "").length
    ans.push(len)
  }
}

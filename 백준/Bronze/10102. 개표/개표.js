const fs = require("fs")
const input = fs
  // .readFileSync("./10102")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const N = parseInt(input[0])
const st = input[1]
const cnt = { A: 0, B: 0 }

for (let char of st) {
  cnt[char] = cnt[char] + 1
}

if (cnt.A < cnt.B) {
  console.log("B")
} else if (cnt.A === cnt.B) {
  console.log("Tie")
} else {
  console.log("A")
}

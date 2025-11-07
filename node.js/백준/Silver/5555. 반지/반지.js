const fs = require("fs")
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.trim())

const str = input[0]
const N = parseInt(input[1])
const arr = input.splice(2)
let ans = 0

for (const word of arr) {
  const testWord = word + word
  if (testWord.includes(str)) {
    ans++
  }
}
console.log(ans)

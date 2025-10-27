const fs = require("fs")

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.trim())
const N = parseInt(input[0])

// 길이는 모두 같다
const numberLen = input[1].length
const nums = input.splice(1)

// 한 글자부터 시작
for (let i = 1; i <= numberLen; i++) {
  const numberSet = new Set()

  for (let num of nums) {
    numberSet.add(num.substring(numberLen - i))
  }
  if (numberSet.size === N) {
    console.log(i)
    break
  }
}

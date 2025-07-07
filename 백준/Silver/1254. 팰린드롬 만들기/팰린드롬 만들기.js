const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()

let ans = input.length
let isFound = false

for (let i = 0; i < input.length; i++) {
  if (!isFound) {
    isFound = isPalindrome(input.substring(i))
  }
  if (isFound) {
    console.log(ans + i)
    break
  }
}

function isPalindrome(str) {
  const normalArr = str.split("")
  const reversed = str.split("").reverse()

  for (let i = 0; i < normalArr.length; i++) {
    if (normalArr[i] !== reversed[i]) {
      return false
    }
  }
  return true
}

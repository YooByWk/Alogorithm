const fs = require("fs")
const word = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase()

const veces = {}

for (let char of word) {
  veces[char] ? veces[char]++ : (veces[char] = 1)
}

let maxCnt = 0
let maxChar = ""
let isMultiple = false

for (const char in veces) {
  if (veces[char] > maxCnt) {
    maxChar = char
    maxCnt = veces[char]
    isMultiple = false
  } else if (veces[char] === maxCnt) {
    isMultiple = true
  }
}

if (isMultiple) {
  console.log("?")
} else console.log(maxChar.toUpperCase())

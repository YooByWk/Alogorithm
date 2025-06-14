const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const originalStr = input[0]
const explosionStr = input[1]
const expLen = explosionStr.length

const resultArr = []

for (let i = 0; i < originalStr.length; i++) {
  const currentChar = originalStr[i]

  resultArr.push(currentChar)

  if (resultArr.length >= expLen) {
    let match = true
    for (let j = 0; j < expLen; j++) {
      if (resultArr[resultArr.length - expLen + j] !== explosionStr[j]) {
        match = false
        break
      }
    }

    if (match) {
      resultArr.splice(resultArr.length - expLen, expLen)
    }
  }
}

if (resultArr.length === 0) {
  console.log("FRULA")
} else {
  console.log(resultArr.join(""))
}

const fs = require("fs")
const N = parseInt(fs.readFileSync(0, "utf8").trim())
const decreasingNumbers = []

function generateDecreasingNumbers(currentNum, lastDigit) {
  decreasingNumbers.push(currentNum)

  for (let nextDigit = 0; nextDigit < lastDigit; nextDigit++) {
    const nextNum = currentNum * 10 + nextDigit

    if (nextNum > 9876543210) {
      continue
    }

    generateDecreasingNumbers(nextNum, nextDigit)
  }
}

for (let i = 0; i <= 9; i++) {
  generateDecreasingNumbers(i, i)
}

decreasingNumbers.sort((a, b) => a - b)

if (N > decreasingNumbers.length) { 
  console.log(-1)
} else {
  console.log(decreasingNumbers[N - 1])
}
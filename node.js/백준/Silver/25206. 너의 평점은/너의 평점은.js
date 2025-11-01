const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

// 전공과목별 합을
// 학점의 총 합으로 나눈 값

let accCredit = 0
let accPoint = 0

const pointTable = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
}

for (const line of input) {
  const [name, credit, point] = line.trim().split(" ")

  if (point === "P") {
    continue
  }
  accCredit += Number(credit)
  accPoint += Number(credit) * pointTable[point]
}
const answer = (accPoint / accCredit).toFixed(6)
console.log(answer)

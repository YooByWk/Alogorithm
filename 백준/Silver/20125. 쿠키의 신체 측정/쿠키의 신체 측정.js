const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = parseInt(input[0])
const cookieBody = input.slice(1).map((row) => row.split(""))

let heartR, heartC

// 1. 심장 위치 찾기
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (cookieBody[r][c] === "*") {
      heartR = r + 1
      heartC = c
      break
    }
  }
  if (heartR !== undefined) break
}
// 팔

let leftArm = 0
for (let c = heartC - 1; c >= 0; c--) {
  if (cookieBody[heartR][c] === "*") {
    leftArm++
  } else {
    break
  }
}

let rightArm = 0
for (let c = heartC + 1; c < N; c++) {
  if (cookieBody[heartR][c] === "*") {
    rightArm++
  } else {
    break
  }
}

// 허리
let waist = 0
let waistEndR = heartR
for (let r = heartR + 1; r < N; r++) {
  if (cookieBody[r][heartC] === "*") {
    waist++
    waistEndR = r
  } else {
    break
  }
}

// 다리 길이 측정
let leftLeg = 0
for (let r = waistEndR + 1; r < N; r++) {
  if (heartC - 1 >= 0 && cookieBody[r][heartC - 1] === "*") {
    leftLeg++
  } else {
    break
  }
}

let rightLeg = 0
for (let r = waistEndR + 1; r < N; r++) {
  if (heartC + 1 < N && cookieBody[r][heartC + 1] === "*") {
    rightLeg++
  } else {
    break
  }
}

console.log(heartR + 1, heartC + 1)
console.log(leftArm, rightArm, waist, leftLeg, rightLeg)

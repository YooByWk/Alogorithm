const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const points = input.map((l) => l.split(" ").map(Number))

let testX = {}
let testY = {}

for (const [x, y] of points) {
  testX[x] ? testX[x]++ : (testX[x] = 1)
  testY[y] ? testY[y]++ : (testY[y] = 1)
}

let fx
let fy

for (const x in testX) {
  if (testX[x] === 1) {
    fx = x
    break
  }
}

for (const y in testY) {
  if (testY[y] === 1) {
    fy = y
    break
  }
}

console.log(`${fx} ${fy}`)

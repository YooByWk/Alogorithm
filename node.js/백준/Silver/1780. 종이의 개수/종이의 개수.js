const fs = require("fs")

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim())



const N = Number(input[0])

const arr = input.splice(1).map((line) => line.split(" ").map(Number))
const count = [0, 0, 0]

DnC(0, 0, N)

console.log(count[0])
console.log(count[1])
console.log(count[2])

function DnC(row, col, size) {
  if (allSame(row, col, size)) {
    const val = arr[row][col]
    count[val + 1]++
    return
  }
  const nextSize = size / 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const nextRow = row + i * nextSize
      const nextCol = col + j * nextSize

      DnC(nextRow, nextCol, nextSize)
    }
  }
}

function allSame(r, c, s) {
  const stt = arr[r][c]

  for (let i = r; i < r + s; i++) {
    for (let j = c; j < c + s; j++) {
      if (arr[i][j] !== stt) {
        return false
      }
    }
  }
  return true
}

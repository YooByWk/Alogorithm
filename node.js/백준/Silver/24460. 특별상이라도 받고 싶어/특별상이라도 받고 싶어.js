const fs = require("fs")

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const N = parseInt(input[0])

const arr = new Array(N)

for (let i = 1; i <= N; i++) {
  const line = input[i]

  const numLine = line.split(" ").map(Number)

  arr[i - 1] = numLine
}
const ans = rec_sol(N, 0, 0)

console.log(ans)

/**
 *
 * @param {number} size
 * @param {number} r
 * @param {number} c
 * @returns
 */
function rec_sol(size, r, c) {
  if (size === 1) {
    return arr[r][c]
  }

  const half = size / 2

  const res = [
    rec_sol(half, r, c),
    rec_sol(half, r, c + half),
    rec_sol(half, r + half, c),
    rec_sol(half, r + half, c + half),
  ]
  res.sort((a, b) => a - b)

  return res[1]
}

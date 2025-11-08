const fs = require("fs")
const [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(sol(A, B, C))

/**
 *
 * @param {Number} A  : 고정비용
 * @param {Number} B  : 가변비용
 * @param {Number} C  : 가격
 */
function sol(A, B, C) {
  if (B >= C) {
    return -1
  }

  const pro = C - B

  return Math.floor(A / pro + 1)
}

const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim()

function cal(N) {
  let sum = N
  let tmp = N

  while (tmp > 0) {
    sum += tmp % 10
    tmp = Math.floor(tmp / 10)
  }
  return sum
}

let sm = 0

for (let i = 1; i < Number(input); i++) {
  const t_cal = cal(Number(i))

  if (t_cal === Number(input)) {
    sm = i
    break
  }
}

console.log(sm)

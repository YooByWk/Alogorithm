const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number)

const point = []

for (let i = 1; i < 9; i++) {
  point.push([input[i - 1], i])
}

point.sort((a, b) => b[0] - a[0])

const top5 = point.slice(0, 5)

top5.sort((a, b) => a[1] - b[1])

const order = []
const totalPoint = top5.reduce((acc, prev) => {
  order.push(prev[1])
  return (acc = prev[0] + acc)
}, 0)

console.log(totalPoint)
console.log(order.join(" "))

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const first = input[0].split(" ").map(Number)
const second = input[1].split(" ").map(Number)

const l = first[0] * second[1]
const r = first[1] * second[0]

let real_t = l + r
let real_b = first[1] * second[1]

const comm = gcd(real_t, real_b)

console.log(`${real_t / comm} ${real_b / comm}`)

function gcd(a, b) {
  while (b !== 0) {
    c = a % b
    a = b
    b = c
  }
  return a
}

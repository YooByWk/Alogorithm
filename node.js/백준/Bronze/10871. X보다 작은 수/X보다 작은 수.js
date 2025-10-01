const fs = require("fs")

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, X] = input[0].split(" ").map(Number)

const numbers = input[1].split(" ").map(Number)

const smallerNumbers = numbers.filter((e) => e < X)

const ans = smallerNumbers.join(" ")

console.log(ans)

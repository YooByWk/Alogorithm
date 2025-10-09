const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const dirty = input[0]

const clean = dirty.replace(/[0-9]/g, "")

const keyword = input[1]
console.log(clean.includes(keyword) ? 1 : 0)

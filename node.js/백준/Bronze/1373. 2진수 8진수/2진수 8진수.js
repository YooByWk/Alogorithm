const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

let bin = input
const re = bin.length % 3

// 2진 -> 8진 3자리당 1개

if (re !== 0) {
  const pad = 3 - re
  bin = "0".repeat(pad) + bin
}

let oct = ""
for (let i = 0; i < bin.length; i += 3) {
  const three = bin.substring(i, i + 3)
  const Toct = parseInt(three, 2)
  oct += Toct
}

console.log(oct)

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("-")

let ans = ""

for (word of input) {
  ans += word[0]
}
console.log(ans)

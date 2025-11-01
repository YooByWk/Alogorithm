const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split("")

let answer = ""
const tmp = []

let isTag = false

const reversedAdd = () => {
  if (tmp.length > 0) {
    answer += tmp.reverse().join("")
    tmp.length = 0
  }
}

for (const s of input) {
  if (s === "<") {
    reversedAdd()

    isTag = true
    answer += s
  } else if (s === ">") {
    isTag = false
    answer += s
  } else if (isTag) {
    answer += s
  } else {
    if (s === " ") {
      reversedAdd()
      answer += s
    } else {
      tmp.push(s)
    }
  }
}

reversedAdd()

console.log(answer)

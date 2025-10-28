const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

solution(input)

function solution(input) {
  const [N, ...tmp] = input
  const pak = tmp.map((e) => parseInt(e.trim()))

  const q = []
  for (const i of pak) {
    const num = parseInt(i)

    if (num === -1) {
      if (q.length > 1) {
        console.log(q.join(" ").trim())
      } else {
        console.log("empty")
      }
    }

    if (num === 0) {
      q.shift()
    } else if (q.length >= N) {
      continue
    } else {
      q.push(num)
    }
  }
}

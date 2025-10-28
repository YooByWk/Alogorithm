const fs = require("fs")

function solution() {
  const input = fs.readFileSync(0, "utf8").toString().trim()
  const N = parseInt(input)

  const q = Array.from({ length: N }, (_, i) => i + 1)

  const ans = []

  while (q.length > 1) {
    const drop = q.shift()
    ans.push(drop)

    const cardToMove = q.shift()
    q.push(cardToMove)
  }

  if (q.length === 1) {
    ans.push(q[0])
  }

  console.log(ans.join(" ").trim())
}

solution()

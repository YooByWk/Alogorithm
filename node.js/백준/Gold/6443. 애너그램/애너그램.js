const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const N = parseInt(input[0])

const arr = input.slice(1).map((l) => l.trim())

solution(N, arr)

function solution(N, words) {
  for (let i = 0; i < N; i++) {
    const word = words[i].split("").sort().join("")
    const visited = new Array(word.length).fill(false)
    const result = []
    const buffer = []

    function backtrack(depth) {
      if (depth === word.length) {
        buffer.push(result.join(""))
        return
      }

      let lastChar = null
      for (let j = 0; j < word.length; j++) {
        if (visited[j]) continue
        if (lastChar === word[j]) continue

        visited[j] = true
        lastChar = word[j]
        result.push(word[j])

        backtrack(depth + 1)

        result.pop()
        visited[j] = false
      }
    }

    backtrack(0)
    console.log(buffer.join("\n"))
  }
}

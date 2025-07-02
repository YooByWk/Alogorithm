const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, K] = input[0].split(" ").map(Number)

const table = input.slice(1)[0].split("")
const taken = Array(N).fill(false)

let ans = 0

for (let i = 0; i < N; i++) {
  if (table[i] === "P") {
    let isEaten = false

    for (let j = K; j >= 1; j--) {
      const leftIdx = i - j
      if (leftIdx < 0) continue

      if (table[leftIdx] === "H" && taken[leftIdx] === false) {
        taken[leftIdx] = true
        ans++
        isEaten = true
        break
      }
    }

    if (!isEaten) {
      for (let j = 1; j <= K; j++) {
        const rightIdx = i + j
        if (rightIdx >= N) continue

        if (table[rightIdx] === "H" && taken[rightIdx] === false) {
          taken[rightIdx] = true
          ans++
          break
        }
      }
    }
  }
}
console.log(ans)

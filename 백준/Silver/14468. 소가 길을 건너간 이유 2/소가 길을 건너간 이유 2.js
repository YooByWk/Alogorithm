const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()

const st = []
const charPositions = new Map()

for (let i = 0; i < input.length; i++) {
  const char = input[i]

  if (!charPositions.has(char)) {
    charPositions.set(char, [i])
  } else {
    charPositions.get(char).push(i)
  }
}

let cross = 0

for (let i = 0; i < 26; i++) {
  const char1 = String.fromCharCode("A".charCodeAt(0) + i)
  if (!charPositions.has(char1)) continue
  const [s1, e1] = charPositions.get(char1)

  for (let j = i + 1; j < 26; j++) {
    const char2 = String.fromCharCode("A".charCodeAt(0) + j)
    if (!charPositions.has(char2)) continue
    const [s2, e2] = charPositions.get(char2)
    if ((s1 < s2 && s2 < e1 && e1 < e2) || (s2 < s1 && s1 < e2 && e2 < e1)) {
      cross++
    }
  }
}
console.log(cross)

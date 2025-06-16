const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")

const N = input[0]

const OPP = input.slice(1)

const ans = []
const sc = new Set()

for (let opt of OPP) {
  let found = false

  const words = opt.split(" ")

  let tmpOpt = [...words]
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    // 첫 글자 따와서 집어넣기
    if (word.length > 0) {
      const firstChar = word[0]
      const lowerFirst = firstChar.toLowerCase()

      if (!sc.has(lowerFirst)) {
        found = true
        // [] 붙여주기
        tmpOpt[i] = `[${firstChar}]` + word.substring(1)
        sc.add(lowerFirst)
        ans.push(tmpOpt.join(" "))
        break
      }
    }
  }
  if (found) {
    continue
  }

  let charIdx = -1

  for (let j = 0; j < opt.length; j++) {
    const char = opt[j]

    if (char === " ") {
      continue
    }

    const lowerChar = char.toLowerCase()

    if (!sc.has(lowerChar)) {
      found = true
      sc.add(lowerChar)
      charIdx = j
      break
    }
  }

  if (found) {
    const newOpt =
      opt.substring(0, charIdx) +
      `[${opt[charIdx]}]` +
      opt.substring(charIdx + 1)
    ans.push(newOpt)
  } else {
    ans.push(opt)
  }
}

console.log(ans.join("\n"))

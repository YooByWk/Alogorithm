const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")

const vocales = ["a", "e", "i", "o", "u"]
let answer = ""

for (let i = 0; i < input.length; i++) {
  let isSafe = true
  const pwd = input[i]
  if (pwd === "end") break
  // 모음 포함
  if (!/[aeiou]/.test(pwd)) {
    isSafe = false
  }
  // 모음 3개 연속 안됨, 자음 3개 연속 안됨
  if (/[aeiou]{3}/.test(pwd) || /[^aeiou]{3}/.test(pwd)) {
    isSafe = false
  }
  // 같은 글자 연속 두번 안되지만 ee oo 는 됨
  if (isSafe) {
    for (let j = 0; j < pwd.length - 1; j++) {
      if (pwd[j] === pwd[j + 1]) {
        if (pwd[j] !== "e" && pwd[j] !== "o") {
          isSafe = false
          break
        }
      }
    }
  }

  isSafe
    ? (answer += `<${input[i]}> is acceptable.\n`)
    : (answer += `<${input[i]}> is not acceptable.\n`)
}
console.log(answer.trim())

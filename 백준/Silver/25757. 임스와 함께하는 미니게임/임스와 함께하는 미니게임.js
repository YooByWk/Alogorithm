const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, game] = input[0].trim().split(" ")

const needUsers = game === "Y" ? 1 : game === "F" ? 2 : 3

const played = new Set()
let ans = 0

const users = input.slice(1)

let curUser = 0

for (let user of users) {
  if (!played.has(user)) {
    played.add(user)
    curUser++
  }

  if (needUsers === curUser) {
    ans++
    curUser = 0
  }
}

console.log(ans)

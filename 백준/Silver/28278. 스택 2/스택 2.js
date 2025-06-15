const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
let [N, ...commands] = [...input]

commands = commands.map((e) => e.split(" ").map(Number))

const st = new Array(N + 1)
let tail = 0
const resBuffer = []

for (let command of commands) {
  const cmd = command[0]
  const num = command.length > 1 ? command[1] : undefined

  switch (cmd) {
    case 1:
      st[tail] = command[1]
      tail++
      break
    case 2:
      if (tail > 0) {
        tail--
        resBuffer.push(st[tail])
      } else {
        resBuffer.push(-1)
      }
      break
    case 3:
      resBuffer.push(tail)
      break
    case 4:
      tail > 0 ? resBuffer.push(0) : resBuffer.push(1)
      break
    case 5:
      if (tail > 0) {
        resBuffer.push(st[tail - 1])
      } else {
        resBuffer.push(-1)
      }
      break
  }
}

console.log(resBuffer.join("\n"))

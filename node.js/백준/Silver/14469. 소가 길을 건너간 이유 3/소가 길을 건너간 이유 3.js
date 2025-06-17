const input = require("fs")
  // .readFileSync("./14469")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = parseInt(input[0])

const tmpCows = input.slice(1)
const infos = []
for (let cow of tmpCows) {
  const info = cow.split(" ").map(Number)
  infos.push(info)
}

infos.sort((o1, o2) => o1[0] - o2[0])

let curTime = 0
for (let info of infos) {
  if (info[0] > curTime) {
    curTime = info[0]
    curTime += info[1]
  } else {
    curTime += info[1]
  }
}

console.log(curTime)

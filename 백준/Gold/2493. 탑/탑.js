const fs = require("fs")

const input = fs
  // .readFileSync("./2493")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const N = input[0]

const towers = input[1].split(" ").map(Number)
const answer = new Array(Number(N)).fill(0)

const st = []

for (let i = 0; i < N; i++) {
  const curT = towers[i]

  while (st.length > 0 && st[st.length - 1][0] <= curT) {
    st.pop()
  }

  if (st.length > 0) {
    answer[i] = st[st.length - 1][1] + 1
  }

  st.push([curT, i])
}

console.log(answer.join(" "))

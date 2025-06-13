const fs = require("fs")
const input = fs
  // .readFileSync("./2816")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const N = parseInt(input[0])

const channels = input.slice(1)
let answer = ""
/**
 * 버튼은 총 4개
 * 1 : 화살표를 아래로
 * 2 : 화살표를 위로
 * 3 : 현재 채널을 아래로 한칸 내림
 * 4 : 현재 채널을 위로 한칸 올림
 */

// kbs1 를 첫번째
// kbs2 를 두번째

const kbs1Idx = channels.indexOf("KBS1")

for (let i = 0; i < kbs1Idx; i++) {
  answer += "1"
}

for (let i = 0; i < kbs1Idx; i++) {
  answer += "4"
  const tmp = channels[kbs1Idx - i]
  channels[kbs1Idx - i] = channels[kbs1Idx - i - 1]
  channels[kbs1Idx - i - 1] = tmp
}

const kbs2Idx = channels.indexOf("KBS2")

for (let i = 0; i < kbs2Idx; i++) {
  answer += "1"
}

for (let i = 0; i < kbs2Idx - 1; i++) {
  answer += "4"
  const tmp = channels[kbs2Idx - i]
  channels[kbs2Idx - i] = channels[kbs2Idx - i - 1]
  channels[kbs2Idx - i - 1] = tmp
}

console.log(answer)

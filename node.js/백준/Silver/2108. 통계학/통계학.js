const fs = require("fs")

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const arr = input
  .splice(1)
  .map(Number)
  .sort((a, b) => a - b)

// 합
let acc = 0

// 최빈
let freq = new Map()
// 중앙값
const centre = arr[Math.floor(arr.length / 2)]

for (let i = 0; i < N; i++) {
  acc += arr[i]
  freq.set(arr[i], (freq.get(arr[i]) || 0) + 1)
}

let ans = ""

// 산술 - 소수점 이하 첫째 반올림
ans += `${Math.round(acc / N)}`
// 중앙값
ans += "\n"
ans += `${centre}`

// 최빈 - 두번째로 작은 값 출력
let max_freq = 0
let posible = []

for (const count of freq.values()) {
  if (count > max_freq) {
    max_freq = count
  }
}

for (const [number, count] of freq.entries()) {
  if (count === max_freq) {
    posible.push(number)
  }
}
posible.sort((a, b) => a - b)
const ansFreq = posible.length > 1 ? posible[1] : posible[0]

ans += "\n"
ans += `${ansFreq}`

// 범위
ans += "\n"
ans += `${arr[N - 1] - arr[0]}`
console.log(ans)

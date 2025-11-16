const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const N = input[0]

const students = {}

for (let i = 1; i <= N; i++) {
  const [time, name] = input[i].trim().split(" ")
  const [hour, mins] = time.split(":")
  const tmp_total_mins = parseInt(hour) * 60 + parseInt(mins)

  students[name] = (students[name] || 0) + tmp_total_mins
}


// 기본 제공 시간   :  100 분
// 기본 요금        :  10
// 기본  단위 시간  :  50
// 단위 요금        :  3

// [name, mins]
let bill = []

for (const student of Object.entries(students)) {
  // 기본 제공 시간 100분 : 10원
  let tmp = student[1] - 100
  if (tmp <= 0) {
    bill.push([student[0], 10])
  } else {
    bill.push([student[0], 10 + Math.ceil(tmp / 50) * 3])
  }
}

bill.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1]
  }
  return a[0].localeCompare(b[0])
})

for (const [name, price] of bill) {
  console.log(`${name} ${price}`)
}

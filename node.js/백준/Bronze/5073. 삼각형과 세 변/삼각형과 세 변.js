const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

for (let i = 0; i < input.length; i++) {
  const line = input[i]
  const arr = line.split(" ").map(Number)

  if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0) {
    break
  }

  solution(arr)
}

function solution(sides) {
  // 삼각형 조건을 확인하기 위해 변의 길이를 오름차순으로
  const sortedSides = [...sides].sort((a, b) => a - b)

  // 가장 긴 변의 길이(sortedSides[2])가 나머지 두 변의 길이의 합보다 크거나 같으면 Invalid
  if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
    console.log("Invalid")
    return
  }

  // 세 변의 길이가 모두 같은 경우
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    console.log("Equilateral")
  }
  // 두 변의 길이만 같은 경우
  else if (
    sides[0] === sides[1] ||
    sides[1] === sides[2] ||
    sides[0] === sides[2]
  ) {
    console.log("Isosceles")
  }
  // 세 변의 길이가 모두 다른 경우
  else {
    console.log("Scalene")
  }
}

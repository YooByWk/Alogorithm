const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const N = parseInt(input[0])

let buildings = input[1].split(" ").map(Number)

buildings = [0, ...buildings]

const visibleCount = Array(N + 1).fill(0)
const closestBuilding = Array(N + 1).fill(Infinity)

const st = [] // 스택

// 왼쪽에서 오른쪽으로 순회 (1번 건물부터 N번 건물까지)
for (let i = 1; i <= N; i++) {
  const currentHeight = buildings[i]

  while (st.length > 0 && st[st.length - 1][1] <= currentHeight) {
    st.pop()
  }

  if (st.length > 0) {
    visibleCount[i] += st.length
    const [leftBuildingIdx, leftBuildingHeight] = st[st.length - 1]

    if (Math.abs(i - leftBuildingIdx) < Math.abs(i - closestBuilding[i])) {
      closestBuilding[i] = leftBuildingIdx
    } else if (
      Math.abs(i - leftBuildingIdx) === Math.abs(i - closestBuilding[i])
    ) {
      closestBuilding[i] = Math.min(closestBuilding[i], leftBuildingIdx)
    }
  }
  st.push([i, currentHeight])
}

// 스택 초기화
st.length = 0

// 오른쪽에서 왼쪽으로 순회 (N번 건물부터 1번 건물까지)
for (let i = N; i >= 1; i--) {
  const currentHeight = buildings[i]

  while (st.length > 0 && st[st.length - 1][1] <= currentHeight) {
    st.pop()
  }

  if (st.length > 0) {
    visibleCount[i] += st.length
    const [rightBuildingIdx, rightBuildingHeight] = st[st.length - 1]

    if (Math.abs(i - rightBuildingIdx) < Math.abs(i - closestBuilding[i])) {
      closestBuilding[i] = rightBuildingIdx
    } else if (
      Math.abs(i - rightBuildingIdx) === Math.abs(i - closestBuilding[i])
    ) {
      closestBuilding[i] = Math.min(closestBuilding[i], rightBuildingIdx)
    }
  }
  st.push([i, currentHeight])
}

let result = ""
for (let i = 1; i <= N; i++) {
  result += visibleCount[i]
  if (visibleCount[i] > 0) {
    result += ` ${closestBuilding[i]}`
  }
  result += "\n"
}

console.log(result.trim())

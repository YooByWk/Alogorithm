const fs = require("fs")

const input = fs
  // .readFileSync("./1926")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number) // 세로 가로

const arr = []
const visited = []
for (let i of input.slice(1)) {
  let hori = i.split(" ").map(Number)
  arr.push(hori)
  visited.push(Array(M).fill(false))
}

let pictureCnt = 0
let maxArea = 0

const dr = [1, -1, 0, 0]
const dc = [0, 0, 1, -1]

function dfs(r, c) {
  visited[r][c] = true
  let curArea = 1

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i]
    const nc = c + dc[i]

    if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
      if (!visited[nr][nc] && arr[nr][nc] === 1) {
        curArea += dfs(nr, nc)
      }
    }
  }
  return curArea
}

for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (arr[r][c] === 1 && !visited[r][c]) {
      pictureCnt++
      const area = dfs(r, c)
      maxArea = Math.max(area, maxArea)
    }
  }
}

console.log(pictureCnt)
console.log(maxArea)

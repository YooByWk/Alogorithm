const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")

const N = parseInt(input[0])
let grid = input.slice(1).map((line) => {
  return line.split("")
})

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]

let normalCnt = 0
let blindCnt = 0

for (let idx = 0; idx < 2; idx++) {
  if (idx === 1) {
    grid = grid.map((r) => r.map((c) => (c === "G" ? "R" : c)))
  }

  const visited = Array.from({ length: N }, () => Array(N).fill(false))
  let curCnt = 0

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c]) {
        curCnt++

        const q = []
        q.push([r, c])
        visited[r][c] = true
        const targetColour = grid[r][c]

        while (q.length > 0) {
          const [curR, curC] = q.shift()

          for (let i = 0; i < 4; i++) {
            const nr = curR + dr[i]
            const nc = curC + dc[i]

            if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
              if (!visited[nr][nc] && grid[nr][nc] === targetColour) {
                visited[nr][nc] = true
                q.push([nr, nc])
              }
            }
          }
        }
      }
    }
  }

  if (idx === 0) normalCnt = curCnt
  else {
    blindCnt = curCnt
  }
}

console.log(`${normalCnt} ${blindCnt}`)

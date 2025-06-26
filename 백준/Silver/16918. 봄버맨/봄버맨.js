const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

const [R, C, N] = input[0].split(" ").map(Number)

const bombArr = input.slice(1).map((e) => e.split(""))

const timer = Array.from({ length: R }, () => Array(C).fill(0))

for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    if (bombArr[r][c] === "O") {
      timer[r][c] = 0
    } else {
      timer[r][c] = -1
    }
  }
}

function plantBombs(currentTime) {
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (bombArr[r][c] === ".") {
        bombArr[r][c] = "O"
        timer[r][c] = currentTime
      }
    }
  }
}

function detonateBombs(currentTime) {
  const bombsToExplode = []

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (bombArr[r][c] === "O" && currentTime - timer[r][c] >= 3) {
        bombsToExplode.push([r, c])
      }
    }
  }

  const dr = [-1, 1, 0, 0]
  const dc = [0, 0, -1, 1]

  for (const [br, bc] of bombsToExplode) {
    bombArr[br][bc] = "."
    timer[br][bc] = -1

    for (let i = 0; i < 4; i++) {
      const nr = br + dr[i]
      const nc = bc + dc[i]

      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        bombArr[nr][nc] = "."
        timer[nr][nc] = -1
      }
    }
  }
}

if (N === 1) {
} else {
  for (let t = 2; t <= N; t++) {
    if (t % 2 === 0) {
      plantBombs(t)
    } else {
      detonateBombs(t)
    }
  }
}

let result = ""
for (let r = 0; r < R; r++) {
  result += bombArr[r].join("")
  if (r < R - 1) {
    result += "\n"
  }
}
console.log(result)

// 2178

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, M] = input[0].split(" ").map((v) => +v)
const graph = []

for (let i = 1; i <= N; i++) {
  graph.push(input[i].split("").map((v) => +v))
}
const visited = Array.from({ length: N }, () => Array(M).fill(false))

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const queue = []
queue.push([0, 0])
visited[0][0] = true

while (queue.length) {
  const [x, y] = queue.shift()
  for (let i = 0; i < 4; i++) {
    const newX = x + dx[i]
    const newY = y + dy[i]
    if (
      newX >= 0 &&
      newX < N &&
      newY >= 0 &&
      newY < M &&
      graph[newX][newY] === 1 &&
      !visited[newX][newY]
    ) {
      graph[newX][newY] = graph[x][y] + 1
      visited[newX][newY] = true
      queue.push([newX, newY])
    }
  }
}

console.log(graph[N - 1][M - 1])

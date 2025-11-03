// 2025 11 03
// 너비우선 탐색

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

// N : 정점의 수
// M : 간선 정보의 개수
// R : 시작 정점

const [N, M, R] = input[0].split(" ").map(Number)

const visited = new Array(N + 1).fill(0)
const nodes = Array.from({ length: N + 1 }, () => [])

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].trim().split(" ").map(Number)
  nodes[a].push(b)
  nodes[b].push(a)
}

let head = 0
let curVisit = 1
const q = []
q.push(R)
visited[R] = curVisit

curVisit++

while (head < q.length) {
  const curNode = q[head]
  const targets = nodes[curNode].sort((a, b) => a - b)
  for (const nextNode of targets) {
    if (visited[nextNode]) {
      continue
    }
    // 방문 안함
    q.push(nextNode)
    visited[nextNode] = curVisit
    curVisit++
  }
  head++
}
let answer = ""

for (let i = 1; i <= N; i++) {
  answer += `${visited[i]}\n`
}
console.log(answer.trim())
// 인접 정점은 오름차순 방문
// 무방향 그래프

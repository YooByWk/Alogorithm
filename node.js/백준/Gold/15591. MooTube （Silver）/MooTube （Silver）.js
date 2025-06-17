const input = require("fs")
  // .readFileSync("./15591")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const [N, Q] = input[0].split(" ").map(Number)
const rawVid = input.slice(1, N)
const rawQ = input.slice(N, N + Q)

const nodes = {}
for (let i = 1; i <= N; i++) {
  nodes[i] = []
}

for (const connection of rawVid) {
  const [p, q, r] = connection.split(" ").map(Number)
  nodes[p].push([q, r])
  nodes[q].push([p, r])
}

const res = []

for (const query of rawQ) {
  const [k, v] = query.split(" ").map(Number)

  let cnt = 0
  const visited = new Set()
  const queue = [[v, Infinity]]

  visited.add(v)
  while (queue.length > 0) {
    const [curNode, curMinUsado] = queue.shift()

    for (const edge of nodes[curNode]) {
      const neighbor = edge[0]
      const usado = edge[1]

      if (!visited.has(neighbor) && usado >= k) {
        visited.add(neighbor)
        queue.push(edge)
        cnt++
      }
    }
  }
  res.push(cnt)
}

console.log(res.join("\n"))

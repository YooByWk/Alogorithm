const fs = require("fs")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")

// 첫 줄: 테스트 케이스 개수
const TestCase = parseInt(input[0])
let curIdx = 1

for (let t = 0; t < TestCase; t++) {
  const friendRelationCnt = parseInt(input[curIdx])
  const friendRelationArr = []

  for (let i = 0; i < friendRelationCnt; i++) {
    friendRelationArr.push(input[curIdx + i + 1].split(" "))
  }
  solution(friendRelationArr)
  curIdx += friendRelationCnt + 1 // @@@ 각 테스트 케이스의 관계 수 + 1(테스트 케이스 수 라인) 만큼 이동
}

function solution(arr) {
  const parent = {}
  const size = {}

  const find = (name) => {
    if (!parent[name]) {
      parent[name] = name
      size[name] = 1
    }
    if (parent[name] === name) {
      return name
    }
    return (parent[name] = find(parent[name]))
  }

  const union = (name1, name2) => {
    const root1 = find(name1) // @@@ 변수명 변경: root1 대신 name1 재정의하지 않음
    const root2 = find(name2) // @@@ 변수명 변경: root2 대신 name2 재정의하지 않음

    if (root1 !== root2) {
      parent[root2] = root1 // @@@ root2를 root1의 집합에 합침
      size[root1] += size[root2]
    }
    return size[root1]
  }

  arr.forEach((rel) => {
    const [name1, name2] = rel
    console.log(union(name1, name2))
  })
}

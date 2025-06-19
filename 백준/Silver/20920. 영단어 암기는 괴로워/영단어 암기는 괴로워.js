const fs = require("fs")

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, M] = input[0].split(" ").map(Number)

const words = input.slice(1).map((e) => e.trim())

// 자주 나오는 단어
const cnt = new Map()

for (let word of words) {
  if (word.length < M) continue

  cnt.set(word, (cnt.get(word) || 0) + 1)
}

// 정렬을 위한 배열
const sortedWords = [...cnt.entries()]

sortedWords.sort((a,b) => {
  const [wordA, cntA] = a;
  const [wordB, cntB] = b;
  
  // 빈도수가 다를 때
  if (cntA !== cntB) {
    return cntB - cntA // 내림차순 정렬
  }
  
  // 빈도수가 같을 떄 - 길이순
  if (wordA.length !== wordB.length) {
    return wordB.length - wordA.length // 긴 것 부터.    
  }
  
  return wordA.localeCompare(wordB)
  
})

console.log(sortedWords.map(entry => entry[0]).join('\n'))

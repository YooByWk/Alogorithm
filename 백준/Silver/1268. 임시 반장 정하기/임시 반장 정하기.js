const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((l) => l.trim());

const N = Number(input[0]);
const students = input.slice(1).map((l) => l.split(" ").map(Number));

const counts = new Array(N).fill(0);
let maxCount = 0;
let president = 1; // 학생 번호는 1부터

// 1. 기준 학생 (i)
for (let i = 0; i < N; i++) {
  const sameClassmates = new Set();
  
  // 2. 비교 대상 학생 (j)
  for (let j = 0; j < N; j++) {
    if (i === j) {
      continue;
    }
    
    // 3. 학년 (k)
    for (let k = 0; k < 5; k++) {
      if (students[i][k] === students[j][k]) {
        sameClassmates.add(j); 
      }
    }
  }
  
  counts[i] = sameClassmates.size;
}

for (let i = 0; i < N; i++) {
  if (counts[i] > maxCount) {
    maxCount = counts[i];
    president = i + 1; 
  }
}

console.log(president);
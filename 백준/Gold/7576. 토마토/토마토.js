const fs = require("fs");
const path = "/dev/stdin";
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

const [M, N] = input[0].split(" ").map(Number); // M: 가로, N: 세로

const tomatoBox = input.slice(1).map((l) => l.split(" ").map(Number));

const dr = [1, -1, 0, 0];
const dc = [0, 0, -1, 1];

const q = []; // BFS를 위한 큐
let days = 0; // 최소 날짜

// 1. 모든 익은 토마토를 큐에 추가하고 + visited 
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (tomatoBox[r][c] === 1) {
      q.push([r, c, 0]); // [r, c, 날짜]
    }
  }
}

let head = 0;
while (q.length > head) {
  const [r, c, currentDay] = q[head++];

  days = Math.max(days, currentDay);

  // 2. 4방향으로 탐색
  for (let i = 0; i < 4; i++) {
    const newR = r + dr[i];
    const newC = c + dc[i];

    // 유효성 검사 (범위 안에 있고, 익지 않은 토마토일 경우)
    if (
      newR >= 0 &&
      newR < N &&
      newC >= 0 &&
      newC < M &&
      tomatoBox[newR][newC] === 0
    ) {
      tomatoBox[newR][newC] = 1; // 토마토를 익히고
      q.push([newR, newC, currentDay + 1]); // 큐에 추가 (날짜 + 1)
    }
  }
}

// 3. 모든 토마토가 익었는지 확인
let hasZero = false;
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (tomatoBox[r][c] === 0) {
      hasZero = true;
      break;
    }
  }
}

// 4. 결과 출력
if (hasZero) {
  console.log(-1);
} else {
  console.log(days);
}
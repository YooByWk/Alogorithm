const fs = require('fs');

// 입력 처리
const [x, y] = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const findQuadrant = (x: number, y: number): number => {
  if (x > 0 && y > 0) {
    return 1; // 제1사분면
  } else if (x < 0 && y > 0) {
    return 2; // 제2사분면
  } else if (x < 0 && y < 0) {
    return 3; // 제3사분면
  } else if (x > 0 && y < 0) {
    return 4; // 제4사분면
  }
  throw new Error('Invalid input'); // x와 y는 0이 될 수 없으므로 예외
};

// 결과 출력
console.log(findQuadrant(x, y));

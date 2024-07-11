const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

function minRepaint(N, M, board) {
  const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
  ];

  const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
  ];

  let minRepaintCount = Infinity;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let whiteRepaint = 0;
      let blackRepaint = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (board[i + x][j + y] !== whiteFirst[x][y]) {
            whiteRepaint++;
          }
          if (board[i + x][j + y] !== blackFirst[x][y]) {
            blackRepaint++;
          }
        }
      }

      const currentMinRepaint = Math.min(whiteRepaint, blackRepaint);
      minRepaintCount = Math.min(minRepaintCount, currentMinRepaint);
    }
  }

  return minRepaintCount;
}

console.log(minRepaint(N, M, board));
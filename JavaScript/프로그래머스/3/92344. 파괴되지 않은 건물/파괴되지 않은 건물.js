function solution(board, skill) {
    const n = board.length;
    const m = board[0].length;
    const diff = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (const [type, r1, c1, r2, c2, degree] of skill) {
        const effect = type === 1 ? -degree : degree;
        diff[r1][c1] += effect;
        diff[r1][c2 + 1] -= effect;
        diff[r2 + 1][c1] -= effect;
        diff[r2 + 1][c2 + 1] += effect;
    }
    
   for (let i = 0; i < n; i++) {   
      for (let j = 1; j < m; j++) {
          diff[i][j] += diff[i][j - 1]
      }
    }
    
  for (let j = 0; j < m; j++) {
    for (let i = 1; i < n; i++) {
      diff[i][j] += diff[i - 1][j];
    }
  }
    
  let answer = 0;
    
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] + diff[i][j] > 0) answer++;
    }
  }
    
    return answer;
}
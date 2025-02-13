function solution(diffs, times, limit) {
  const n = diffs.length;
  
  // spread operator 대신 for-loop로 최대값 계산 (인자 개수 많아 오류나는 문제 해결)
  let maxDiff = diffs[0];
  for (let i = 1; i < n; i++) {
    if (diffs[i] > maxDiff) {
      maxDiff = diffs[i];
    }
  }

  // 주어진 숙련도(level)로 퍼즐을 다 풀 수 있는지 체크
  function canSolve(level) {
    let totalTime = 0;
    let prevTime = times[0];
    
    // 첫 번째 퍼즐은 난이도 1이니까 바로 풀림
    totalTime += times[0];
    
    for (let i = 1; i < n; i++) {
      const curDiff = diffs[i];
      const curTime = times[i];

      if (curDiff <= level) {
        totalTime += curTime;
        prevTime = curTime;
      } else {
        const failCount = curDiff - level;
        totalTime += failCount * (curTime + prevTime) + curTime; 
        prevTime = curTime;
      }
      
      // 만약 제한 시간을 넘으면 바로 false 리턴.
      if (totalTime > limit) return false;
    }
    return totalTime <= limit;
  }
  
  // 이진 탐색으로 최소 숙련도
  let low = 1, high = maxDiff;
  let answer = high;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (canSolve(mid)) {
      answer = mid;
      high = mid - 1;
    } else {
      // 높임
      low = mid + 1;
    }
  }
  
  return answer;
}

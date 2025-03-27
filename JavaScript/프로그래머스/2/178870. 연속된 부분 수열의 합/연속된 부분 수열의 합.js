function solution(sequence, k) {
  let answer = [];
  let minLen = Infinity;
  let start = 0;
  let end = 0;
  let sum = sequence[0]; 

  while (start < sequence.length && end < sequence.length) {
    if (sum === k) {
      const curLen = end - start + 1;
      if (curLen < minLen || (curLen === minLen && start < answer[0])) {
        minLen = curLen;
        answer = [start, end];
      }
      sum -= sequence[start];
      start++;
    } else if (sum < k) { 
      end++;
      if (end < sequence.length) {
        sum += sequence[end];
      }
    } else {
      sum -= sequence[start];
      start++;
    }
  }
  return answer;
}
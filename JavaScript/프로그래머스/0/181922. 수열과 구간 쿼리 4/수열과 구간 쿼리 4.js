function solution(arr, queries) {
    var answer = [...arr];
    for (let i = 0; i < queries.length; i++) {
        [s,e,k] = queries[i];
        for (let j = s; j <=e;j++ ) {
            if (j % k === 0) {
                answer[j] += 1
            }
        }
    }
    return answer;
    // return [s,e,k]
}
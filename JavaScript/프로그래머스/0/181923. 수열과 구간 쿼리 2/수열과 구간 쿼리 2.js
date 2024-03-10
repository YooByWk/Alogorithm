function solution(arr, queries) {
    var answer = [];
    // s i e 인 i 에 대해 k 보다 크면서, 가장 작은 arr[i] 찾기
    for (let i = 0; i < queries.length; i++) {
        let temp = []
        let s, e, k 
        [s,e,k] = queries[i]
        
        for (var j = s; j <= e; j++) {
            // s부터 e 까지 찾기
                if (arr[j] > k) {
                    temp.push(arr[j])       
                }
            }
            if (temp.length === 0 ) {
                answer.push(-1)
            } else {
            answer.push(Math.min(...temp))
    }
        

    }
    return answer;
}
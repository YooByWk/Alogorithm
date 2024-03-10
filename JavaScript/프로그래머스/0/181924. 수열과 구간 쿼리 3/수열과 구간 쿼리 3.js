function solution(arr, queries) {
    let answer = [...arr];
    var len = queries.length
    for (let i = 0; i < len; i++) {
        let temp = answer[queries[i][0]]
        answer[(queries[i][0])] = answer[(queries[i][1])]
        answer[(queries[i][1])] = temp
    }
    return answer;
}
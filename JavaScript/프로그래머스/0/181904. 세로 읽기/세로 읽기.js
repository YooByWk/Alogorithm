function solution(str, m, c) {
    var answer = '';
    for (let i = 0 ; i <  str.length / m; i++ ) {
        answer += str[(i * m) + (c - 1)]
    }
    return answer;
}

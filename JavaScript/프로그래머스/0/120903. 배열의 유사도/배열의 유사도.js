function solution(s1, s2) {
    var answer = 0;
    for (let char of s1) {
        if (s2.includes(char)) {
            answer++
        }
    }
    return answer;
}
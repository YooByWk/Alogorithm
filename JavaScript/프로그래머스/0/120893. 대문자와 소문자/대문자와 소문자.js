function solution(my_string) {
    var answer = '';
    for (char of my_string) {
        if (char === char.toUpperCase()) {
            // 대문자임
            answer += char.toLowerCase()
        } else {
            answer += char.toUpperCase()
        }
    }
    return answer;
}
function solution(my_string) {
    var answer = Array(52).fill(0)
    for (i of my_string) {
        let code = i.charCodeAt()
        if (code >= 65 && code <= 90) {
        // 65 ~ 90 대문자 26
            answer[code - 65]++
        } else {
        // 97 ~ 122 소문자 // 26 ==  -71
            answer[code - 71]++
        }
        
    }
    return answer;
}
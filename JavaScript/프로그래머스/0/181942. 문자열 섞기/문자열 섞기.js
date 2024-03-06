function solution(str1, str2) {
    var answer = '';
    str1 = [...str1]
    str2 = [...str2]
    cnt = str1.length
    for (var i = 0; i < cnt; i++) {
        answer += str1[i]
        answer += str2[i] 
    }
    return answer;
}
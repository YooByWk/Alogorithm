function solution(a, b, flag) {
    var answer = 0;
    switch (flag) {
        case true:
        answer = a + b
        break;
        case false:
        answer = a - b
        break;}
    return answer;
}
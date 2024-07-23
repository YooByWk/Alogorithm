function solution(myString) {
    var answer = '';
    let arr = myString.split('')
    for (let i of arr) {
        if (i.charCodeAt() < 108) {
            answer += 'l';
            continue;
        }
        answer += i
    }
    return answer;
}
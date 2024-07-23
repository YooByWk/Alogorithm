function solution(s) {
    var answer = [];
    s = s.split(' ')
    for (let str of s) {
        str === "Z" ? answer.pop() : answer.push(Number(str)) 
    }
    return answer.length === 0 ? 0 : answer.reduce((a,c) => a + c);
}
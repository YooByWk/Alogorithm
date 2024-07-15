function solution(names) {
    var answer = [];
    names.filter((_,idx) => {
        return idx % 5 === 0 ? answer.push(names[idx]) : -1
    })
    return answer;
}
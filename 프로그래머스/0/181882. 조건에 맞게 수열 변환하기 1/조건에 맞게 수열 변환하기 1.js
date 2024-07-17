function solution(arr) {
    var answer = [];
    arr.forEach((e) => {
        if (e % 2 === 0 && e >= 50) {
            answer.push(e /2 )
        } else if (e % 2 === 1 && e < 50) {
            answer.push(e * 2)
        } else {answer.push(e)}
    })
    return answer;
}
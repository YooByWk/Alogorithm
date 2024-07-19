function solution(num_list, n) {
    var answer = [];
    const vez = num_list.length / n
    for (let i = 0; i < vez; i++) {
        let tmp = num_list.splice(0,n)
        answer.push(tmp)
    }
    return answer;
}
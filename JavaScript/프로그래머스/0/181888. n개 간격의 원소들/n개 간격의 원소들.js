function solution(num_list, n) {
    var answer = []
    var arr = num_list.filter((_,idx) => {
        if (idx % n === 0 ) {
            answer.push(num_list[idx])
        }
    });
    
    return answer;
}
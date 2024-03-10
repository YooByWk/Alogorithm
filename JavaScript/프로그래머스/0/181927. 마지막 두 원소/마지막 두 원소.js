function solution(num_list) {
    
    var answer = num_list;
    var len = num_list.length;
    
    if (answer[len-1] > answer[len-2]) {
        answer.push(answer[len-1] - answer[len-2])
    } else {
        answer.push(answer[len-1]*2)
    }
    
    return answer;
}
function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach((target)=> {
        answer += my_string[target]
    })
    return answer;
}
function solution(num_str) {
    var answer = num_str.split('').reduce((acc,cur) => +acc + +cur);
    return answer;
}
function solution(n) {
    var answer = n.toString().split('').reduce((acc,cur) => +acc + +cur,0 );
    
    return answer;
}
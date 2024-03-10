function solution(numLog) {
    var answer = '';
    var len = numLog.length
    for (let i = 0 ; i < len-1; i++){
        if (numLog[i+1] === numLog[i] + 1 ){ // w
            answer += 'w'            
        } else if (numLog[i+1] === numLog[i] -1  ) { // s
            answer += 's'
        } else if (numLog[i+1] === numLog[i] + 10 ) { // d
            answer += 'd'
        } else { // a
            answer += 'a'
        }
    }
    return answer;
}
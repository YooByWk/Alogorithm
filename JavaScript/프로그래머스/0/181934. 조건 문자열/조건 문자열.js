function solution(ineq, eq, n, m) {
    var answer = null;
    if (ineq === '>' && eq ==='=') {
        n >= m ? answer = 1 : answer = 0;
    }else if (ineq === '<' && eq === '=') {
        n <= m ? answer = 1 :answer =  0;
    }else if (ineq === '>' && eq === '!') {
        n > m ? answer =  1 : answer =  0
    }else {
        n < m ? answer = 1 : answer =  0
    }
        
    return answer;
}
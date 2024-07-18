function solution(rsp) {
    var answer = '';
    // 가위 2 
    // 바위 0 
    // 보 5
    
    // rsp 를 모두 이기는 경우를 만들자.
    for (let op of rsp ) {
        switch (op) {
            case '2' :
                answer += '0'
                break
            case '0' :
                answer += '5'
                break
            case '5' : 
                answer += '2'
                break
        }
    }
    
    return answer;
}
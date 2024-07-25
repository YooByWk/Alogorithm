function solution(picture, k) {
    var answer = [];
    let tmpLine = ''
    for (let line of picture){
        for (let char of line )
            {
            for (let i = 0; i < k; i++ ) {
                    tmpLine += char
                }
        }
        for (let j = 0; j < k; j++) {
            answer.push(tmpLine)
        }
        tmpLine = ''
    }
    
    return answer;
}
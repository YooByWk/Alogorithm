function solution(my_string) {
    var answer = [];
    for (let str of my_string) {
        if (!isNaN(Number(str)) && str !== ' ') { 
            answer.push(Number(str));  
        }
    }
    return answer.sort((a,b) => a -b );
}

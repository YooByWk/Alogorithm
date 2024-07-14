function solution(arr) {
    var answer = [];
    
    let $1st = arr.indexOf(2)
    let $2nd = arr.lastIndexOf(2)

    
    answer = $1st !== -1 ? arr.slice($1st, $2nd + 1) : [-1]
    
    return answer;
}
function solution(arr, query) {
    var answer = [];
    for (let i = 0 ; i < query.length; i++) {
        if ( i % 2 === 0) {
        // 짝수 query[i] 인덱스 뒷부분을 자름
            arr = arr.slice(0, query[i] + 1)
            
        } 
        else if ( i % 2 === 1) {
        // 홀수 query[i] 인덱스 앞부분을 잘라버림
            arr = arr.slice(query[i])
        }  
    } 
    return answer = arr ;
}
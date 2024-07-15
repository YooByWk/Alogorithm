// function solution(arr, queries) {
//     var answer = [...arr];
//     for (let i = 0; i < queries.length; i++) {
//         [s,e,k] = queries[i];
//         for (let j = s; j <=e;j++ ) {
//             if (j % k === 0) {
//                 answer[j] += 1
//             }
//         }
//     }
//     return answer;
//     // return [s,e,k]
// }

function solution (arr, queries) {
    
    for (let query of queries) {
        let [s,e,k] = query
        
        for (let i = s; i <= e; i++ ) {
            if (i % k === 0) {
                arr[i]++
            }
        }
    }
       return arr
    
}
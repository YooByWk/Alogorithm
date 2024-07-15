// function solution(l, r) {
//     var answer = [];
//     for (let i = l ; i <= r; i ++) {
//         if (i % 5 !== 0) {
//             continue
//         }
//         var str = String(i)
//         if(![...str].every(
//             (s) => {
//            return s === '5' || s ==='0';
//         }
//                           )
//           ) {
//             continue
//         }
//         answer.push(i)
//     }
    
//     return answer.length > 0 ? answer : [-1];
// }


function solution(l, r) {
    let answer = [];
    for (let i = l; i <= r; i++) {
        if (i % 5 !== 0) {
            continue;
        }
        let str = String(i);
        if (![...str].every(
            (s) => s === '5' || s === '0'
        )) {
            continue;
        }
        answer.push(i);
    }
    return answer.length > 0 ? answer : [-1];
}

function solution(n, arr1, arr2) {
    const resArr = []
    for (let i = 0; i < n; i++ ) {
        const arr1Bi = arr1[i].toString(2)
        const arr2Bi = arr2[i].toString(2)
        
        const bi1 = add0(arr1Bi, n)
        const bi2 = add0(arr2Bi, n)
        
        let tempStr = ''
        for (let j = 0; j < n; j++) {
            if (bi1[j] === "1" || bi2[j] === "1") {
                tempStr += "#"
            } else {
                tempStr += ' '
            }
        }
       resArr.push(tempStr)
    }
    return resArr ;
}

function add0(el, n) {
    if (el.length >= n ) return el
    return "0".repeat(n - el.length) + el
} 
function solution(a, b, c, d) {
    let answer = 0;
    const solArr = [a, b, c, d].sort((a,b) => a - b )
    let minV
    let maxV
    // 4 
    if (solArr[0] === solArr[3]) {
        answer = solArr[0] * 1111
        return answer
    }
    // 3, 1 
    if (solArr[0] === solArr[2] ) {
        answer = (10 * solArr[0] + solArr[3]) ** 2
        return answer
 
    }
    else if (solArr[1] === solArr[3]) {
        answer = (10 * solArr[1] + solArr[0]) ** 2
        return answer
    }
    // 2, 2
    if (solArr[0] === solArr[1] && solArr[2] === solArr[3]) {
        let [p, q] = [solArr[1], solArr[2]]
        answer = (p + q) * Math.abs(p - q)
        return answer 
    } 
    // 2, 1, 1 
    if (solArr[0] === solArr[1] && solArr[2] !== solArr[3]) {
        answer = solArr[2] * solArr[3]
        return answer
    } else if (solArr[1] === solArr[2] && solArr[0] !== solArr[3]) {
        answer = solArr[0] * solArr[3]
        return answer
    } else if (solArr[2] === solArr[3] && solArr[0] !== solArr[1]) {
        answer = solArr[0] * solArr[1]
        return answer
    }
    // 1, 1, 1, 1
    return solArr[0]
    
}
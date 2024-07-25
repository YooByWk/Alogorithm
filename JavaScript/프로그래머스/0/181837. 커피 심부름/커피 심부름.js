function solution(order) {
    var answer = 0;
    // 아메 4500
    // 라떼 5000
    // 아무거나 = 아메
    
    for (let od of order) {
        if (od.includes('cafe')) {answer += 5000}
        else {answer += 4500}
    }
    return answer;
}
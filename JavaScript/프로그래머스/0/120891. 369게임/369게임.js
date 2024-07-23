function solution(order) {
    var answer = 0;
    let charOrder = String(order)
    let pat = [3,6,9]
    for (let c of order.toString()) {
        // String(c)
        if (pat.includes(+c)) answer++ 
    }
    return answer;
}
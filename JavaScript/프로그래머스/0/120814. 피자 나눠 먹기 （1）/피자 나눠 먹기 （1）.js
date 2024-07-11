function solution(n) {
    var answer = 0;
    const pizza = n / 7
    const left = n % 7
    if (left === 0) {
        answer = Math.floor(pizza)
    } else {
        answer = Math.floor(pizza) + 1
    }
    return answer;
}
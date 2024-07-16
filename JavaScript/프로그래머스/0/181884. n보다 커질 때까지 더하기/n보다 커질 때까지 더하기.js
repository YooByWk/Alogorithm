function solution(numbers, n) {
    var answer = 0;
    let sum = 0 
    for (number of numbers) {
        sum += number
        if (sum > n) {
            break
        }
    }
    console.log(sum)
    return sum;
}
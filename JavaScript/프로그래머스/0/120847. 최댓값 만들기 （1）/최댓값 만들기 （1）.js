function solution(numbers) {
    var answer = 0;
    let max = -1
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j< numbers.length; j++) {
            let tmp = numbers[i] * numbers[j]
            if (tmp > max) max = tmp
        }    
    }
    
    return max;
}
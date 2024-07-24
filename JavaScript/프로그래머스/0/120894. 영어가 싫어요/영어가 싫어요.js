function solution(numbers) {
    var answer = '';
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let tmp = ''
    let len = numbers.length
    for (let i = 0; i < len; i++) {
        tmp += numbers[i]
        if (numArr.indexOf(tmp) !== -1) {
            answer += numArr.indexOf(tmp)
            tmp = ''
        }
    }
    return Number(answer);
}
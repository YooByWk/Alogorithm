function solution(my_string, num1, num2) {
    var answer = '';
    let arr = my_string.split('')
    let char1 = my_string[num1]
    let char2 = my_string[num2]
    arr[num1] = char2
    arr[num2] = char1
    return arr.join('');
}
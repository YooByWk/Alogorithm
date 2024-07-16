function solution(my_string, letter) {
    var answer = '';
    let regex = new RegExp(letter, 'g')
    answer = my_string.replace(regex, '')
    return answer;
}
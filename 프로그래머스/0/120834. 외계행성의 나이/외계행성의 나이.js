function solution(age) {
    var answer = '';
    let stringAge = age.toString()
    // console.log('a'.charCodeAt())
    for (let i = 0; i < stringAge.length ; i++) {
        answer += String.fromCharCode(+stringAge[i] + 97)
    }
    
    // a = 97  : input === 0
    // b = 98  : input === 1
    return answer;
}
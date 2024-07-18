function solution(letter) {
    var answer = '';
    const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let decodeList = letter.split(' ')
    let nums = decodeList.map((code) => {
        return String.fromCharCode(codes.indexOf(code) + 97)
    })
    
    return nums.join('');
}
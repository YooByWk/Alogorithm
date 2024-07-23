function solution(cipher, code) {
    let answer =''
    var char = cipher.split('').map((el,idx) => {
         if ((idx + 1) % code === 0 ) {
           return  answer += el
        } else return
    } );
    // code 의 배수 글자만 암호.
    
    return answer;
}
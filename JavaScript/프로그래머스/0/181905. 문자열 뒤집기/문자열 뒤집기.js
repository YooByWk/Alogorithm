function solution(my_string, s, e) {
     // s까지는 그냥 넣고
    // s부터 e 까지 뒤집고
    // e 부터 다시 그냥 넣기
    let one = my_string.slice(0,s)
    let two = my_string.slice(s,e+1).split('').reverse().join('')
    let thr = my_string.slice(e+1)
    
    return one + two + thr;
}
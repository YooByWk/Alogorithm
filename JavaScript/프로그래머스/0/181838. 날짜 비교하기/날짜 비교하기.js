function solution(date1, date2) {
    var answer = 0;
    let charDate1 = String(date1.join(''))
    let charDate2 = String(date2.join(''))
    
    return +charDate1 < +charDate2 ? 1 : 0  ;
}
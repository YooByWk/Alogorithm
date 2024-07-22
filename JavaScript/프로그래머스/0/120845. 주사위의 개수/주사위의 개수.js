function solution(box, n) {
    var answer = 0;
    let [a,b,c] = box
     a = Math.floor(a / n)
     b = Math.floor(b / n)
     c = Math.floor(c / n)
    
    return a * b * c;
}
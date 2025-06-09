function solution(n) {
    var arr = [] 
    n.toString().split('').reverse().map((e) => arr.push(Number(e)))
    return arr
}
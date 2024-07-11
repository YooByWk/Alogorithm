function solution(n) {
    let a = n
    let b = 6
    // 6조각을 n 명이 먹는다.
    let r 
    while (b !== 0) {
        r = a % b
        a = b
        b = r
    }
    console.log(a,b,r)
    return (n / a)
}

/* 
function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}
*/
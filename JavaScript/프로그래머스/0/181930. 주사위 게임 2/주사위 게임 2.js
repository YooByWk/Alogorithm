function solution(a, b, c) {
    var answer = 0;
    const check = {
    C1 : a + b + c,
    C2 : a**2 + b**2 + c**2 ,
    C3 : (a**3) + (b**3) + (c**3) 
    }
    if (a != b && a != c && b != c) {
        answer = check.C1
    } else if (a === b && a === c ) {
        answer = check.C1 * check.C2 * check.C3
    } else {
        answer = check.C1 * check.C2
    }
    return answer;
}
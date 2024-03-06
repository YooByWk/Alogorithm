function solution(a, b) {
    var answer = [];
    var A = Number(String(a)+ String(b))

    var C = 2 * (Number(String(a) * Number(String(b))))

    return Math.max(A,C);
}



// A, B, 2 * a * b
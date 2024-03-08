function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var newNumer = numer1 * denom2 + numer2 * denom1;
    var newDenom = denom1 * denom2;
    var gcd = (a, b) => {
        while (b !== 0) {
            var temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    a = gcd(newNumer, newDenom)
    return [newNumer/ a,newDenom / a];
}
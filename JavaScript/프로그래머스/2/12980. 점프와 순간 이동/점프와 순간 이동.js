function solution(n) {
    var ans = 0;
    let falta  = n 
    while (falta !== 0 ) {
        if (falta % 2 === 0 ) {
            falta /= 2
        } else {
            falta -= 1
            ans++
        } 
    }
    return ans;
}
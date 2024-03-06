function solution(n) {
    var answer = 0;
    let isOdd = n % 2 === 0 ? true : false
    if (isOdd)  {
        for( let i = 0 ; i <=  n ; i+=2) {
            answer += i * i;
        }
    } else {
        for (let i = 1 ; i <= n; i+=2) {
            answer += i
        }
    }
        
    return answer;
}
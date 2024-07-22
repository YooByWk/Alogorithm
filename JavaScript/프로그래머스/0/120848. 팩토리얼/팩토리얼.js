function solution(n) {
    var answer = 0;
    let dp = Array(11).fill(0)
    dp[0] = 1
    let max = -1
    for (let i = 1; i < 12; i++) {
        dp[i] = dp[i-1] * i
    }
    for (let t = 1; t < 12; t++) {
        if (dp[t] <= n && dp[t] > max) {
            max = t
        } 
    }
    
    return max;
}

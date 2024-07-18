function solution(balls, share) {
    return comb(balls, share);
}


function comb(n, m) {
    if (n === m ) return 1
    const dp = Array.from({length : n + 1}, () => Array(m+1).fill(0))
        for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, m); j++) {
            if (j === 0 || j === i) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }
    }

    return dp[n][m];
    
}
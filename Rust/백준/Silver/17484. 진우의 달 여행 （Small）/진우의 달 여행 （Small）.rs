use std::cmp;
use std::io::{self, BufRead, BufReader};

pub fn main() {
    let stdin = io::stdin();
    let reader = BufReader::new(stdin.lock());
    let mut lines = reader.lines();

    let nm_input: Vec<usize> = lines
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();
    let n = nm_input[0];
    let m = nm_input[1];

    let mut fuel = vec![vec![0; m]; n];
    for i in 0..n {
        let row: Vec<i32> = lines
            .next()
            .unwrap()
            .unwrap()
            .split_whitespace()
            .map(|s| s.parse().unwrap())
            .collect();
        fuel[i] = row;
    }

    const INF: i32 = 1_000_001;
    let mut dp = vec![vec![vec![INF; 3]; m]; n];

    for j in 0..m {
        dp[0][j][0] = fuel[0][j];
        dp[0][j][1] = fuel[0][j];
        dp[0][j][2] = fuel[0][j];
    }

    for i in 1..n {
        for j in 0..m {
            if j > 0 {
                let from_down = dp[i - 1][j - 1][1];
                let from_right_diag = dp[i - 1][j - 1][2];
                dp[i][j][0] = cmp::min(from_down, from_right_diag) + fuel[i][j];
            }

            let from_left_diag = dp[i - 1][j][0];
            let from_right_diag = dp[i - 1][j][2];
            dp[i][j][1] = cmp::min(from_left_diag, from_right_diag) + fuel[i][j];

            if j < m - 1 {
                let from_left_diag = dp[i - 1][j + 1][0];
                let from_down = dp[i - 1][j + 1][1];
                dp[i][j][2] = cmp::min(from_left_diag, from_down) + fuel[i][j];
            }
        }
    }

    let mut min_fuel = INF;
    for j in 0..m {
        min_fuel = cmp::min(min_fuel, dp[n - 1][j][0]);
        min_fuel = cmp::min(min_fuel, dp[n - 1][j][1]);
        min_fuel = cmp::min(min_fuel, dp[n - 1][j][2]);
    }

    println!("{}", min_fuel);
}

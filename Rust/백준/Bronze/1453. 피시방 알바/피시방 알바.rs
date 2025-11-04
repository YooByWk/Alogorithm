//!
//! 25 11 04 1453 피시방알바 b2
//!
//! [문제링크](https://www.acmicpc.net/problem/1453)
//!
//!

use std::io::{self, Read};
pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).expect("input X");
    let mut lines = input.lines();
    let n: usize = lines
        .next()
        .expect("line expect")
        .parse()
        .expect("number expect");
    let users: Vec<usize> = lines
        .next()
        .unwrap()
        .split_ascii_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

    let mut pc_status = [false; 101];
    let mut ans = 0;
    for user in users {
        if !pc_status[user] {
            pc_status[user] = true;
        } else {
            ans += 1;
        }
    }
    println!("{}", ans);
}

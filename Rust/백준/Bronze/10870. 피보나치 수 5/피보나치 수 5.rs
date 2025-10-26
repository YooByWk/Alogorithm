//! 문제 링크 : https://www.acmicpc.net/problem/10870
use std::io::{self, Read};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("expect input");
    let n: usize = input.trim().parse().expect("expect int");

    println!("{}", fibonacci(n));
}

fn fibonacci(n: usize) -> usize {
    if n == 0 {
        return 0;
    }
    if n == 1 {
        return 1;
    }

    fibonacci(n - 1) + fibonacci(n - 2)
}

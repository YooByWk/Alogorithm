//! ## 백준 25314 - 코딩은 체육과목입니다.
//!
//! 브론즈 5
//!
//! 입력 :
//!
//! 문제의 정수 `N`이 주어진다.
//!
//! 출력 :
//!
//! 4 바이트 당 `long`을 반복출력한다.
//!
//! 마지막에 `int`를 붙여 출력한다.
use std::io;
use std::io::{BufWriter, Write};

pub fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let mut ans = BufWriter::new(io::stdout().lock());
    let N: usize = input.trim().parse().unwrap();

    let num_of_long = N / 4;

    for _ in 0..num_of_long {
        ans.write_all(b"long ").unwrap();
    }
    ans.write_all(b"int").unwrap();

    ans.flush().unwrap();
}
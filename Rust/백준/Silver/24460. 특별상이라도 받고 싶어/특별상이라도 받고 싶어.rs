//! ### 백준 24460 - 특별상이라도 받고싶어
//!
//! 실버 3
//!
//! 첫 줄 정수 N
//!
//! 두번째부터 N개 줄의 i번째 줄에 i번에 줄에 있는 의자의 추첨번호
//!
//! N개의 추첨번호가 공백으로 주어진다.
//!
use std::io::{self, Read};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("데이터가 없는데요");
    let mut tokens = input.split_ascii_whitespace();

    let n: usize = tokens.next().unwrap().parse().expect("N Parse error");

    let mut arr: Vec<Vec<i32>> = Vec::with_capacity(n);

    // arr에 추첨번호 입력
    for _i in 0..n {
        let mut row: Vec<i32> = Vec::with_capacity(n);
        for _j in 0..n {
            let val: i32 = tokens.next().unwrap().parse().unwrap();
            row.push(val);
        }
        arr.push(row);
    }

    // 분할 정복 함수 호출
    let res = solve(&arr, n, 0, 0);

    // 출력
    println!("{}", res);
}

fn solve(arr: &Vec<Vec<i32>>, size: usize, r: usize, c: usize) -> i32 {
    if size == 1 {
        return arr[r][c];
    }

    let half = size / 2;

    let mut res: Vec<i32> = vec![
        solve(arr, half, r, c),
        solve(arr, half, r + half, c),
        solve(arr, half, r, c + half),
        solve(arr, half, r + half, c + half),
    ];

    res.sort_unstable();
    return res[1];
}

//! ### 백준 B2 1076 - 저항
//! 간단한 입력 + 계산 문제
//! 3줄 -> 각 색상 나옴
//! 해당 색 2개 AB로 표기 후 마지막 색에 해당하는 값으로 곱함.
use std::io;

pub fn main() {
    let colors = [
        "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white",
    ];
    let mut first_colour = String::new();
    let mut second_colour = String::new();
    let mut third_colour = String::new();

    io::stdin().read_line(&mut first_colour).unwrap();
    io::stdin().read_line(&mut second_colour).unwrap();
    io::stdin().read_line(&mut third_colour).unwrap();

    let first = colors
        .iter()
        .position(|&s| s == first_colour.trim())
        .unwrap() as u64;
    let second = colors
        .iter()
        .position(|&s| s == second_colour.trim())
        .unwrap() as u64;
    let third = colors
        .iter()
        .position(|&s| s == third_colour.trim())
        .unwrap() as u32;

    let val = (first * 10 + second) * 10_u64.pow(third);

    println!("{}", val)
}

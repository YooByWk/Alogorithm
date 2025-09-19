//! ### 백준 19532 - 브론즈 2 : 수학은 비대면 강의입니다.
//!
//! 문자가 2개인 연립 방정식 해결
//!
//! BufWriter, Read, stdin, stdout 사용
//!
//! `a,b,c,d,e,f`가 공백으로 주어짐, `(x, y)`가 유일하게 존재한다.
use std::io::{BufWriter, Read, Write, stdin, stdout};

pub fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let i_lines: Vec<i32> = input
        .split_ascii_whitespace()
        .map(|st| st.parse().unwrap())
        .collect();
    let mut buf = BufWriter::new(stdout().lock());

    if let [a, b, c, d, e, f] = i_lines.as_slice() {
        for x in -999..=999 {
            for y in -999..=999 {
                let exp1 = (a * x) + (b * y) == *c;
                let exp2 = (d * x) + (e * y) == *f;

                if exp1 && exp2 {
                    writeln!(buf, "{} {}", x, y).unwrap();
                    return;
                }
            }
        }
    }
}

//! ## 백준 1002 (실버3) 터렛
//!
//! x1,y1,r1,x2,y2,r2
//!
//! [문제 링크](https://www.acmicpc.net/problem/1002)

use std::io::{self, BufWriter, Read, Write};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("expected input");

    let mut lines = input.lines();
    let mut output = BufWriter::new(io::stdout().lock());

    let t: usize = lines
        .next()
        .expect("expect T")
        .trim()
        .parse()
        .expect("can not parse");

    for _ in 0..t {
        let info: Vec<isize> = lines
            .next()
            .unwrap()
            .split_ascii_whitespace()
            .map(|s| s.parse().unwrap())
            .collect();

        let x1 = info[0] as f64;
        let y1 = info[1] as f64;
        let r1 = info[2] as f64;

        let x2 = info[3] as f64;
        let y2 = info[4] as f64;
        let r2 = info[5] as f64;

        let res = get_location_cnt(x1, y1, r1, x2, y2, r2);
        writeln!(output, "{}", res).expect("write failed");
    }
}

fn get_location_cnt(x1: f64, y1: f64, r1: f64, x2: f64, y2: f64, r2: f64) -> isize {
    // 거리 계산
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d_sq = dx * dx + dy * dy;

    // 반지름 합 / 차 제곱
    let r_sum_sq = (r1 + r2) * (r1 + r2);
    let r_diff_sq = (r1 - r2) * (r1 - r2);

    // 완전 일치
    if d_sq < 1e-9 && r1 == r2 {
        return -1;
    }

    // 멂
    if d_sq > r_sum_sq {
        return 0;
    }

    // 내부에 있고 만나진 않음
    if d_sq < r_diff_sq {
        return 0;
    }

    // 내접 (1개)
    if (d_sq - r_sum_sq).abs() < 1e-9 {
        return 1;
    }
    // 외접
    if (d_sq - r_diff_sq).abs() < 1e-9 {
        return 1;
    }
    // 두 점 교차
    2
}

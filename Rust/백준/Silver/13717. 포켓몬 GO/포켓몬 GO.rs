//! ## 포켓몬 고
//!
//! [문제 링크](https://www.acmicpc.net/problem/13717)
//!
//! 출력
//!
//! 총 마리수
//!
//! 많이 진화 가능한 포켓몬의 이름
use std::io::{self, Read};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("인풋이 없습니다.");

    // 진화 시킬 수 있는 총 포켓몬의 수와 많이 진화 가능한 포켓몬의 이름을 알아야 한다.
    let mut total_evol: usize = 0;
    let mut most_poke_name: String = String::new();
    let mut most_poke_cnt: usize = 0;

    let mut lines = input.lines();

    let n: usize = lines.next().unwrap().parse().unwrap();

    for i in 0..n {
        let name = lines.next().unwrap();
        let info: Vec<usize> = lines
            .next()
            .unwrap()
            .split_ascii_whitespace()
            .map(|s| s.parse().unwrap())
            .collect();
        let need_cd = info[0];
        let mut cur_cd = info[1];
        let mut tmp_evol: usize = 0;

        while cur_cd >= need_cd {
            // 총량 증가
            cur_cd = cur_cd - need_cd;
            cur_cd += 2;
            total_evol += 1;
            tmp_evol += 1;
        }

        if tmp_evol > most_poke_cnt {
            most_poke_name = name.to_string();
            most_poke_cnt = tmp_evol;
        }
    }

    println!("{}", total_evol);
    println!("{}", most_poke_name);
}

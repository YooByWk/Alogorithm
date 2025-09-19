//! ### 백준 B2 20299 - 3대 측정
//! `N, K, L`
//! `N` 개의 팀
//! `K` - 3인의 레이팅 합 조건
//! `L` - 각 개인의 최소 조건

use std::io::{BufWriter, Read, Write, stdin, stdout};

pub fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut lines = input.split_ascii_whitespace();
    let mut buf = BufWriter::new(stdout().lock());

    let n: usize = lines.next().unwrap().parse().unwrap();
    let k: usize = lines.next().unwrap().parse().unwrap();
    let l: usize = lines.next().unwrap().parse().unwrap();

    let mut pass_team_cnt = 0;
    let mut pass_member = Vec::new();

    for _ in 0..n {
        let r1: usize = lines.next().unwrap().parse().unwrap();
        let r2 = lines.next().unwrap().parse().unwrap();
        let r3 = lines.next().unwrap().parse().unwrap();

        if r1 >= l && r2 >= l && r3 >= l {
            if r1 + r2 + r3 >= k {
                pass_team_cnt += 1;
                pass_member.push(r1);
                pass_member.push(r2);
                pass_member.push(r3);
            }
        }
    }

    writeln!(buf, "{}", pass_team_cnt).unwrap();
    for member in pass_member {
        write!(buf, "{} ", member).unwrap();
    }
}

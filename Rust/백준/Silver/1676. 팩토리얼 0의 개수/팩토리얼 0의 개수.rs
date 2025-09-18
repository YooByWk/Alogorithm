use std::io::{self, BufRead, BufReader};

pub fn main() {
    let stdin = io::stdin();
    let reader = BufReader::new(stdin.lock());
    let mut lines = reader.lines();

    let n: i32 = lines.next().unwrap().unwrap().parse().unwrap();

    let mut cnt = 0;
    let mut cur5 = 5;

    while cur5 <= n {
        cnt += n / cur5;
        cur5 *= 5;
    }
    println!("{}", cnt);
}

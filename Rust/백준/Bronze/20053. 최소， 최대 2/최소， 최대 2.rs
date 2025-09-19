use std::io::{BufWriter, Read, Write, stdin, stdout};

pub fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();

    let mut lines = input.split_ascii_whitespace();

    let tc: usize = lines.next().unwrap().parse().unwrap();
    let mut ans = BufWriter::new(stdout().lock());

    for _ in 0..tc {
        let n: usize = lines.next().unwrap().parse().unwrap();
        let target: Vec<i32> = (0..n)
            .map(|_| lines.next().unwrap().parse().unwrap())
            .collect();

        let max = target.iter().max().unwrap();
        let min = target.iter().min().unwrap();
        writeln!(ans, "{} {}", min, max).unwrap();
    }
}

use std::io::{self, BufRead, BufReader, Write, stdout};

pub fn main() {
    let mut output = stdout().lock();

    let stdin = io::stdin();
    let reader = BufReader::new(stdin.lock());
    let mut lines = reader.lines();

    while let Some(Ok(l)) = lines.next() {
        let parts: Vec<i32> = l
            .split_ascii_whitespace()
            .filter_map(|s| s.parse().ok())
            .collect();

        if parts.len() < 2 {
            continue;
        }

        let a = parts[0];
        let b = parts[1];

        if a == 0 && b == 0 {
            break;
        }
        writeln!(output, "{}", a + b).unwrap();
    }
}

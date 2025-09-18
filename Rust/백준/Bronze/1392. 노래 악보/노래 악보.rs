use std::io::{self, BufRead, BufReader, BufWriter, Write};

pub fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut lines = BufReader::new(io::stdin().lock()).lines();
    let nq_input: Vec<usize> = lines
        .next()
        .unwrap()?
        .split_ascii_whitespace()
        .map(|str| str.parse().unwrap())
        .collect();

    let mut scores = vec![0; nq_input[0] + 1];
    for i in 1..nq_input[0] + 1 {
        let num = lines.next().unwrap()?.parse::<usize>()?;
        scores[i] = num + scores[i - 1];
    }

    // 해당 시간에 부르고 있는 노래의 번호

    let mut out = BufWriter::new(io::stdout().lock());

    for _ in 0..nq_input[1] {
        let t: usize = lines.next().ok_or("EOF")??.parse()?;
        for i in 1..nq_input[0] + 1 {
            if scores[i] > t {
                writeln!(out, "{}", i)?;
                break;
            }
        }
    }

    Ok(())
}

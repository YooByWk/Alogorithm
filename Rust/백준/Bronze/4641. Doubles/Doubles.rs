use std::{
    collections::HashSet,
    fmt::Error,
    io::{self, BufWriter, Read, Write},
};

pub fn solution(line: &mut Vec<isize>) -> usize {
    let mut count = 0;

    let set: HashSet<isize> = line.iter().cloned().collect();

    for &num in line.iter() {
        if set.contains(&(num * 2)) {
            count += 1;
        }
    }

    count
}

pub fn main() -> Result<(), io::Error> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut lines = input.lines();
    let mut buf = BufWriter::new(io::stdout().lock());

    loop {
        let current_line = match lines.next() {
            Some(l) => l,
            None => break,
        };

        let parsed_line: Vec<isize> = current_line
            .trim()
            .split_ascii_whitespace()
            .filter_map(|s| s.parse().ok())
            .collect();

        if parsed_line.len() == 1 && parsed_line[0] == -1 {
            break;
        }

        let mut data_vec: Vec<isize> = parsed_line.into_iter().filter(|&x| x != 0).collect();

        if !data_vec.is_empty() {
            let res = solution(&mut data_vec);
            writeln!(buf, "{}", res)?;
        }
    }

    buf.flush()?;
    Ok(())
}

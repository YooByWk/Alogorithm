use std::io::{self, BufWriter, Read, Write};

pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).unwrap();

    let mut buf = BufWriter::new(io::stdout().lock());

    let mut lines = input.split_ascii_whitespace();

    let tc: usize = lines.next().unwrap().parse().unwrap();

    for i in 0..tc {
        let x: usize = lines.next().unwrap().parse().unwrap();
        let y: usize = lines.next().unwrap().parse().unwrap();

        writeln!(buf, "{}", x + y).unwrap();
    }
}

use std::io::{self, BufWriter, Read, Write, stdout};

pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).unwrap();

    let num_input: usize = input.trim().parse().unwrap();
    let mut ans = BufWriter::new(stdout().lock());
    for i in 1..=num_input {
        writeln!(ans, "{}", "*".repeat(i)).unwrap();
    }
    return;
}

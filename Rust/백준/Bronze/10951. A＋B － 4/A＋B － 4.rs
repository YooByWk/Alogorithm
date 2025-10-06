use std::io::{Read, Write, stdin, stdout};

pub fn main() {
    let mut input = String::new();

    if stdin().read_to_string(&mut input).is_err() {
        return;
    }

    let mut output = stdout().lock();
    let mut tokens = input.split_ascii_whitespace();

    while let (Some(a_str), Some(b_str)) = (tokens.next(), tokens.next()) {
        let a: i32 = a_str.parse().unwrap();
        let b: i32 = b_str.parse().unwrap();

        writeln!(output, "{}", a + b).unwrap();
    }
    output.flush().unwrap();
}

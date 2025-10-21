use std::{
    fmt::Error,
    io::{self, Read, Write},
};

pub fn main() -> Result<(), Error> {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("expected string");
    let mut lines = input.lines();
    let s = lines.next().expect("S expected");
    let p = lines.next().expect("P expected");

    let answer = if s.contains(p) { 1 } else { 0 };

    println!("{}", answer);

    Ok(())
}

use std::io::{self, Read};

fn main() -> io::Result<()> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut tokens = input.split_whitespace();

    let _n: usize = tokens.next().unwrap().parse().unwrap();
    let k: usize = tokens.next().unwrap().parse().unwrap();

    let mut arr: Vec<i64> = tokens.map(|s| s.parse().unwrap()).collect();

    arr.sort(); 

    println!("{}", arr[k - 1]);

    Ok(())
}
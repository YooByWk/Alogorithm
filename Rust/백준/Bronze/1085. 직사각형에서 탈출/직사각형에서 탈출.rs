use std::io::{self, BufRead};
use std::cmp::min;

fn main() {
    let stdin = io::stdin();
    let mut line = String::new();
    
    stdin.lock().read_line(&mut line).unwrap();

    let coords: Vec<i32> = line
        .split_whitespace()
        .map(|s| s.parse::<i32>().unwrap())
        .collect();

    if coords.len() != 4 {
        return;
    }

    let x = coords[0];
    let y = coords[1];
    let w = coords[2];
    let h = coords[3];
    
    let result = min(min(x, w - x), min(y, h - y));
    
    println!("{}", result);
}
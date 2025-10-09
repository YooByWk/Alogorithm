use std::io::{self, Read};

fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).unwrap();

    let lines: Vec<&str> = input.trim().split('\n').collect();
    
    if lines.len() < 2 {
        println!("0"); 
        return;
    }

    let dirty_s = lines[0]; 
    let keyword_k = lines[1]; 

    let clean_s: String = dirty_s
        .chars()
        .filter(|c| !c.is_ascii_digit())
        .collect();

    let result = if clean_s.contains(keyword_k) {
        1
    } else {
        0
    };

    println!("{}", result);
}
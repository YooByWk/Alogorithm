use std::io::{self, Read, BufReader};
use std::io::prelude::*;

fn main() {

    let mut reader = BufReader::new(io::stdin());
    let mut input = String::new();

    reader.read_to_string(&mut input).unwrap(); 
    
    let mut lines = input.lines();

    let time_parts: Vec<u32> = lines.next().unwrap()
                                   .split_whitespace()
                                   .map(|s| s.parse().unwrap())
                                   .collect();
    
    let a = time_parts[0]; // 시
    let b = time_parts[1]; // 분
    let c = time_parts[2]; // 초
    

    let d: u32 = lines.next().unwrap()
                      .trim()
                      .parse().unwrap();


    let total_seconds = a * 3600 + b * 60 + c + d;
    
    let end_total_seconds = total_seconds % 86400;

    let end_hour = end_total_seconds / 3600;
    let end_minute = (end_total_seconds % 3600) / 60;
    let end_second = end_total_seconds % 60;
    
    println!("{} {} {}", end_hour, end_minute, end_second);
}
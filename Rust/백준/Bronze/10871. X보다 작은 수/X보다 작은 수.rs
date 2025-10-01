use std::io::{self, Read};

pub fn main() {
  let mut input = String::new();
  io::stdin().read_to_string(&mut input).unwrap();
  
  let numbers: Vec<i32> = input.split_whitespace().filter_map(|s| s.parse().ok()).collect();
  
  if numbers.len() < 2 {
    return;
  }
  
  let x = numbers[1];

  let res : Vec<String>= numbers[2..].iter().filter(|&n| n < &x).map(|n| n.to_string()).collect();
  
  println!("{}", res.join(" "))
  
}
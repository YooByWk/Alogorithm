use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let parts: Vec<&str> = input.trim().split_whitespace().collect();
    
    if parts.len() != 4 {
        return; 
    }

    let ab_str = format!("{}{}", parts[0], parts[1]);
    let ab_num: i64 = ab_str.parse().expect("Failed to parse AB as i64");

    let cd_str = format!("{}{}", parts[2], parts[3]);
    let cd_num: i64 = cd_str.parse().expect("Failed to parse CD as i64");

    let sum = ab_num + cd_num;
    println!("{}", sum);
}
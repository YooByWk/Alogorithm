use std::io::{self, Read};

fn main() {
    let mut s = String::new();
    io::stdin().read_to_string(&mut s).unwrap();
    let mut it = s.split_whitespace();
    let n: usize = it.next().unwrap().parse().unwrap();
    let k: usize = it.next().unwrap().parse().unwrap();
    let mut a: Vec<u128> = (0..n).map(|_| it.next().unwrap().parse::<u128>().unwrap()).collect();
    a.sort_unstable();
    let mut total: u128 = 0;
    for i in 0..n {
        let multiplier = std::cmp::min(i, k);
        total += a[i] * (multiplier as u128);
    }
    println!("{}", total);
}

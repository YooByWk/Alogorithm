use std::{
    collections::VecDeque,
    io::{self, Read, Write},
};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("input expected");

    let mut lines = input.lines();

    let n: usize = lines.next().expect("there is no lines").parse().unwrap();

    let mut q: VecDeque<isize> = VecDeque::with_capacity(n);

    for line in lines {
        let info: isize = match line.parse() {
            Ok(val) => val,
            Err(_) => panic!(),
        };

        if info == -1 {
            break;
        } else if info == 0 {
            q.pop_front();
        } else {
            if q.len() < n {
                q.push_back(info);
            }
        }
    }
    if q.is_empty() {
        println!("empty");
    } else {
        let output = q
            .iter()
            .map(|&p| p.to_string())
            .collect::<Vec<String>>()
            .join(" ");

        let mut stdout = io::stdout().lock();
        writeln!(stdout, "{}", output).expect("failed to write answer");
        stdout.flush().expect("flush failed");
    }
}

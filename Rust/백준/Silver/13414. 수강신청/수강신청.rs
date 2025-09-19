use std::collections::HashSet;
use std::fmt::Error;
use std::io::{self, BufRead, BufReader, BufWriter, Write};

pub fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut lines = BufReader::new(io::stdin().lock()).lines();
    let kl_inputs: Vec<usize> = lines
        .next()
        .ok_or("No input")??
        .split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

    let k = kl_inputs[0];
    let l = kl_inputs[1];

    let mut raw_students: Vec<String> = Vec::with_capacity(l);
    for _ in 0..l {
        raw_students.push(lines.next().ok_or("EOF")??);
    }

    let mut processed_students: HashSet<String> = HashSet::new();
    let mut final_students: Vec<String> = Vec::with_capacity(k);

    for student in raw_students.iter().rev() {
        if !processed_students.contains(student) {
            processed_students.insert(student.to_string());
            final_students.push(student.clone());
        }
    }

    final_students.reverse();

    let mut out = BufWriter::new(io::stdout().lock());
    for i in 0..final_students.len().min(k) {
        writeln!(out, "{}", final_students[i])?;
    }

    Ok(())
}

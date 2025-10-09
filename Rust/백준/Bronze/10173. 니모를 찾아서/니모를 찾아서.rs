use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let reader = stdin.lock();

    for line in reader.lines() {
        let text = match line {
            Ok(s) => s,
            Err(_) => break, 
        };

        if text.trim() == "EOI" {
            break;
        }

        let lowercased_text = text.to_lowercase();

        if lowercased_text.contains("nemo") {
            println!("Found");
        } else {
            println!("Missing");
        }
    }
}
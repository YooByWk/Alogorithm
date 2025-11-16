use std::{
    cmp::Ordering,
    collections::HashMap,
    io::{self, Read},
};

const BASE_MINS: i32 = 100;
const BASE_PRICE: i32 = 10;
const UNIT_MINS: f64 = 50.0;
const UNIT_PRICE: i32 = 3;

#[derive(Debug, Clone)]
struct StudentBill {
    name: String,
    price: i32,
}

fn main() -> io::Result<()> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut lines = input.trim().lines();

    let n: usize = lines.next().and_then(|l| l.parse().ok()).unwrap_or(0);

    let mut students: HashMap<String, i32> = HashMap::new();

    for _ in 0..n {
        if let Some(line) = lines.next() {
            let parts: Vec<&str> = line.split_whitespace().collect();

            if parts.len() != 2 {
                continue;
            }

            let time = parts[0];
            let name = parts[1];

            let time_parts: Vec<&str> = time.split(":").collect();
            if time_parts.len() != 2 {
                continue;
            }

            let hour = time_parts[0].parse::<i32>().unwrap_or(0);
            let mins = time_parts[1].parse::<i32>().unwrap_or(0);

            let total_mins = hour * 60 + mins;

            *students.entry(name.to_string()).or_insert(0) += total_mins;
        }
    }

    let mut bills: Vec<StudentBill> = Vec::new();

    for (name, total_mins) in students {
        let mut final_price = BASE_PRICE;
        let excess_mins = total_mins - BASE_MINS;

        if excess_mins > 0 {
            let excess_mins_f64 = excess_mins as f64;

            let unit_count = (excess_mins_f64 / UNIT_MINS).ceil() as i32;

            let excess_price = unit_count * UNIT_PRICE;
            final_price += excess_price
        }

        bills.push(StudentBill {
            name,
            price: final_price,
        });
    }

    bills.sort_by(|a, b| {
        let price_cmp = b.price.cmp(&a.price);

        if price_cmp != Ordering::Equal {
            return price_cmp;
        }

        a.name.cmp(&b.name)
    });

    for bill in bills {
        println!("{} {}", bill.name, bill.price);
    }

    Ok(())
}

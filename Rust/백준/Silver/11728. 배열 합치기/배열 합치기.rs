use std::io::{self, Read, Write, BufWriter};

fn main() -> io::Result<()> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut tokens = input.split_whitespace();

    let n: usize = tokens.next().unwrap().parse().unwrap();
    let m: usize = tokens.next().unwrap().parse().unwrap();

    let a: Vec<i64> = tokens.by_ref().take(n).map(|s| s.parse().unwrap()).collect();
    let b: Vec<i64> = tokens.by_ref().take(m).map(|s| s.parse().unwrap()).collect();

    let mut a_ptr = 0;
    let mut b_ptr = 0;

    let mut result: Vec<i64> = Vec::with_capacity(n + m);

    while a_ptr < n && b_ptr < m {
        if a[a_ptr] <= b[b_ptr] {
            result.push(a[a_ptr]);
            a_ptr += 1;
        } else {
            result.push(b[b_ptr]);
            b_ptr += 1;
        }
    }

    while a_ptr < n {
        result.push(a[a_ptr]);
        a_ptr += 1;
    }

    while b_ptr < m {
        result.push(b[b_ptr]);
        b_ptr += 1;
    }

    let stdout = io::stdout();
    let mut writer = BufWriter::new(stdout.lock());

    write!(writer, "{}", result.iter()
        .map(|x| x.to_string())
        .collect::<Vec<String>>()
        .join(" ")
    )?;

    writer.flush()?;

    Ok(())
}
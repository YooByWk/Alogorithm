use std::io::{BufWriter, Read, Write, stdin, stdout};

pub fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();

    let mut lines = input.split_ascii_whitespace();

    let mut buf = BufWriter::new(stdout().lock());
    // 2차원 배열 9 * 9 로 제공됨

    let mut max_num = 0;
    let mut maxR: i32 = 0;
    let mut maxC: i32 = 0;

    for i in 0..9 {
        for j in 0..9 {
            let num: i32 = lines.next().unwrap().parse().unwrap();
            if num > max_num {
                maxR = i;
                maxC = j;
                max_num = num
            }
        }
    }
    writeln!(buf, "{}", max_num).unwrap();
    writeln!(buf, "{} {}", maxR + 1, maxC + 1).unwrap();
}

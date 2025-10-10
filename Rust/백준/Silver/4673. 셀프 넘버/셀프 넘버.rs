use std::io::{self, BufWriter, Write};

/// ### S5 백준4673 - 셀프넘버
///
/// 입력 없음
pub fn main() {
    // 생성자 있으면 제거해야 한다.
    const MAX: usize = 10001;
    let mut is_gen = [false; MAX];

    for i in 1..MAX {
        let gen_num = dn(i);

        if gen_num < MAX {
            is_gen[gen_num] = true;
        }
    }

    let mut output = BufWriter::new(io::stdout().lock());

    for i in 1..MAX {
        if !is_gen[i] {
            writeln!(output, "{}", i).unwrap();
        }
    }

    output.flush().expect("failed")
}

fn dn(mut n: usize) -> usize {
    let mut sum = n;
    while n > 0 {
        sum += n % 10;
        n /= 10;
    }
    sum
}

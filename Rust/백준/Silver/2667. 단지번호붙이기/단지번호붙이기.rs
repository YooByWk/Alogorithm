use std::{
    collections::VecDeque,
    io::{self, BufWriter, Read, Write},
};

pub fn main() {
    let mut input = String::new();
    io::stdin()
        .read_to_string(&mut input)
        .expect("input expected");

    let mut lines = input.lines();
    let n: usize = lines.next().expect("N expected").trim().parse().unwrap();

    let mut apt_map: Vec<Vec<usize>> = Vec::new();

    for _ in 0..n {
        let line_str = lines.next().expect("apt Line expected");

        let apt_line: Vec<usize> = line_str
            .trim()
            .chars()
            .filter_map(|c| c.to_digit(10))
            .map(|d| d as usize)
            .collect();
        apt_map.push(apt_line);
    }

    let mut complexes: Vec<usize> = Vec::new();

    // bfs 호출
    for r in 0..n {
        for c in 0..n {
            if apt_map[r][c] == 1 {
                let complex_len = bfs(&mut apt_map, r as isize, c as isize, n as isize);
                complexes.push(complex_len);
            }
        }
    }

    complexes.sort();

    let mut ans_buf = BufWriter::new(io::stdout().lock());
    let len_ans = complexes.len();
    writeln!(ans_buf, "{}", len_ans).expect("write failed");
    for i in 0..len_ans {
        writeln!(ans_buf, "{}", complexes[i]).expect("complex line write failed");
    }
    ans_buf.flush().expect("flush failed");
}

fn bfs(apt_map: &mut Vec<Vec<usize>>, start_r: isize, start_c: isize, n: isize) -> usize {
    let mut complex_len = 0;

    let mut queue: VecDeque<(isize, isize)> = VecDeque::new();
    const DR: [isize; 4] = [1, -1, 0, 0];
    const DC: [isize; 4] = [0, 0, -1, 1];

    complex_len += 1;
    queue.push_back((start_r, start_c));

    apt_map[start_r as usize][start_c as usize] = 2;

    while let Some((r, c)) = queue.pop_front() {
        for i in 0..4 {
            let nr = r + DR[i];
            let nc = c + DC[i];

            if nr < 0 || nr >= n || nc < 0 || nc >= n {
                continue;
            }

            let nr_usize = nr as usize;
            let nc_usize = nc as usize;

            if apt_map[nr_usize][nc_usize] == 1 {
                complex_len += 1;

                apt_map[nr_usize][nc_usize] = 2;
                queue.push_back((nr, nc));
            }
        }
    }

    complex_len
}

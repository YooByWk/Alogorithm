use std::{
    collections::VecDeque,
    io::{self, Read, Write},
};

pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).expect("err");

    let mut lines = input.lines();

    let mut res: Vec<isize> = Vec::new();

    loop {
        let line = match lines.next() {
            Some(l) => l,
            None => break,
        };

        let wh: Vec<isize> = line
            .split_ascii_whitespace()
            .map(|s| s.parse().unwrap())
            .collect();

        let w = wh[0];
        let h = wh[1];

        if w == 0 && h == 0 {
            break;
        }

        let mut map: Vec<Vec<isize>> = Vec::new();

        for _ in 0..h {
            let rows = lines.next().unwrap();
            let row: Vec<isize> = rows
                .split_ascii_whitespace()
                .map(|s| s.parse().unwrap())
                .collect();
            map.push(row);
        }

        let mut island_count = 0;

        for r in 0..h {
            for c in 0..w {
                if map[r as usize][c as usize] == 1 {
                    bfs(&mut map, w, h, r, c);
                    island_count += 1;
                }
            }
        }
        res.push(island_count);
    } // loop end
    for ans in res {
        println!("{}", ans);
    }
}

fn bfs(map: &mut Vec<Vec<isize>>, w: isize, h: isize, start_r: isize, start_c: isize) {
    // 상하좌우 대각선
    let dr: [isize; 8] = [1, -1, 0, 0, 1, 1, -1, -1];
    let dc: [isize; 8] = [0, 0, 1, -1, 1, -1, 1, -1];

    let mut queue = VecDeque::new();

    queue.push_back((start_r, start_c));
    map[start_r as usize][start_c as usize] = 2;
    while let Some((r, c)) = queue.pop_front() {
        for i in 0..8 {
            let nr = r + dr[i];
            let nc = c + dc[i];

            if nr < 0 || nc < 0 || nr >= h || nc >= w {
                continue;
            }

            let nr_usize = nr as usize;
            let nc_usize = nc as usize;

            if map[nr_usize][nc_usize] == 1 {
                map[nr_usize][nc_usize] = 2;
                queue.push_back((nr, nc));
            }
        }
    }
}

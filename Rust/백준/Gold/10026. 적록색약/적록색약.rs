use std::{
    collections::VecDeque,
    io::{self, Read},
};

fn read_to_vec() -> Vec<String> {
    let mut buf = String::new();
    io::stdin().read_to_string(&mut buf).unwrap();
    buf.trim()
        .replace("\r\n", "\n")
        .split('\n')
        .map(|s| s.to_string())
        .collect()
}

pub fn main() {
    let input = read_to_vec();

    let n: usize = input[0].parse().unwrap();

    let original_grid: Vec<Vec<char>> = input.iter().skip(1).map(|s| s.chars().collect()).collect();
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    let mut normal_cnt: usize = 0;
    let mut blind_cnt: usize = 0;

    for idx in 0..2 {
        let mut grid = original_grid.clone();

        if idx == 1 {
            for r in 0..n {
                for c in 0..n {
                    if grid[r][c] == 'G' {
                        grid[r][c] = 'R';
                    }
                }
            }
        }
        let mut visited = vec![vec![false; n]; n];
        let mut cur_cnt: usize = 0;

        for r in 0..n {
            for c in 0..n {
                if !visited[r][c] {
                    cur_cnt += 1;

                    let mut q: VecDeque<(usize, usize)> = VecDeque::new();

                    q.push_back((r, c));
                    visited[r][c] = true;
                    let target_colour = grid[r][c];

                    while let Some((cur_r, cur_c)) = q.pop_front() {
                        for i in 0..4 {
                            let nr = cur_r as i32 + dr[i];
                            let nc = cur_c as i32 + dc[i];

                            if nr >= 0 && nr < n as i32 && nc >= 0 && nc < n as i32 {
                                let nr_u = nr as usize;
                                let nc_u = nc as usize;

                                if !visited[nr_u][nc_u] && grid[nr_u][nc_u] == target_colour {
                                    visited[nr_u][nc_u] = true;
                                    q.push_back((nr_u, nc_u));
                                }
                            }
                        }
                    }
                }
            }
        }

        if idx == 0 {
            normal_cnt = cur_cnt;
        } else {
            blind_cnt = cur_cnt;
        }
    }

    println!("{} {}", normal_cnt, blind_cnt);
}

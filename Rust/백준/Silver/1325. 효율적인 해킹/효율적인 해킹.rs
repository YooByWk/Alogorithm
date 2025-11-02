use std::io::{self, Read, Write, BufWriter};

pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).unwrap();

    let mut lines = input.lines();
    
    let nm: Vec<usize> = lines.next().unwrap()
        .split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();
    let n = nm[0];
    let m = nm[1];

    let mut gp: Vec<Vec<usize>> = vec![Vec::new(); n + 1];

    for _ in 0..m {
        let line: Vec<usize> = lines.next().unwrap()
            .split_whitespace()
            .map(|s| s.parse().unwrap())
            .collect();
        let a = line[0];
        let b = line[1];
        
        gp[b].push(a);
    }

    fn bfs(n: usize, start: usize, gp: &Vec<Vec<usize>>) -> usize {
        let mut count = 0;
        let mut visited = vec![false; n + 1];
        
        let mut queue: Vec<usize> = Vec::new(); 
        
        queue.push(start);
        visited[start] = true;
        count = 1;
        
        let mut head = 0;

        while head < queue.len() {
            let current = queue[head];
            head += 1;

            for &neighbor in &gp[current] {
                if !visited[neighbor] {
                    visited[neighbor] = true;
                    count += 1;
                    queue.push(neighbor);
                }
            }
        }
        return count;
    }

    let mut max_cnt = 0;
    let mut results: Vec<usize> = vec![0; n + 1];

    for i in 1..=n {
        let hacked_count = bfs(n, i, &gp);
        results[i] = hacked_count;
        
        if hacked_count > max_cnt {
            max_cnt = hacked_count;
        }
    }

    let mut writer = BufWriter::new(io::stdout().lock());
    let mut output = String::new();
    
    for i in 1..=n {
        if results[i] == max_cnt {
            output.push_str(&i.to_string());
            output.push(' ');
        }
    }

    output.pop(); 
    write!(writer, "{}", output).unwrap();
}
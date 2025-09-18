use std::collections::VecDeque;
use std::io::{self, BufRead, BufReader};
use std::vec;

pub fn main() {
    let stdin = io::stdin();
    let reader = BufReader::new(stdin.lock());
    let mut lines = reader.lines();

    // 입력 받기 - 전체 사람의 수
    let n: usize = lines.next().unwrap().unwrap().parse().unwrap();

    // 촌수 계산 대상
    let targets: Vec<usize> = lines
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

    // 관계의 수
    let total_rel: usize = lines.next().unwrap().unwrap().parse().unwrap();

    // 인접 리스트 설정
    let mut relation: Vec<Vec<usize>> = vec![vec![]; n + 1];

    for _ in 0..total_rel {
        let line = lines.next().unwrap().unwrap();
        let mut parts = line.split_whitespace();
        let parent: usize = parts.next().unwrap().parse().unwrap();
        let child: usize = parts.next().unwrap().parse().unwrap();

        relation[parent].push(child);
        relation[child].push(parent);
    }

    // BFS 로 하자.
    let mut Q = VecDeque::new();
    let mut distance = vec![-1; n + 1];

    Q.push_back(targets[0]);
    distance[targets[0]] = 0;

    let mut found = false;

    while let Some(cur_person) = Q.pop_front() {
        if cur_person == targets[1] {
            found = true;
            break;
        }

        // relation의 값 중 하나를 빌려오므로 &을 변수 앞에
        // for문에서 & 표시 (빌림) 이 없다면, 소유권 탈취를 우려하기 때문?
        // "반복자 무효화"
        for &next_person in &relation[cur_person] {
            if distance[next_person] == -1 {
                distance[next_person] = distance[cur_person] + 1;
                Q.push_back(next_person);
            }
        }
    }
    if found {
        println!("{}", distance[targets[1]])
    } else {
        println!("{}", -1)
    }
}

use std::io::{self, Read};

struct Tree {
    x: usize,
    y: usize,
    fence: usize,
}

pub fn main() -> io::Result<()> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut tokens = input.split_ascii_whitespace();

    let n_str = tokens.next().expect("N값이 주어지지 않음");
    let n: usize = n_str.parse().expect("N 값이 유효한 숫자가 아님");

    let mut trees: Vec<Tree> = Vec::with_capacity(n);

    for _ in 0..n {
        let x: usize = tokens.next().unwrap().parse().unwrap();
        let y: usize = tokens.next().unwrap().parse().unwrap();
        let fence: usize = tokens.next().unwrap().parse().unwrap();

        trees.push(Tree { x, y, fence })
    }
    let min_cuts = bruteforce(n, &trees);
    println!("{}", min_cuts);
    Ok(())
}

fn bruteforce(n: usize, trees: &[Tree]) -> usize {
    let mut min_cuts: usize = n; // 모든 나무를 댕강한 경우로 초기화

    for i in 0..n {
        for j in 0..n {
            for k in 0..n {
                for l in 0..n {
                    let min_x = trees[i].x;
                    let max_x = trees[j].x;
                    let min_y = trees[k].y;
                    let max_y = trees[l].y;

                    if min_x > max_x || min_y > max_y {
                        continue;
                    }

                    let cur_cuts = count_cuts(n, trees, min_x, max_x, min_y, max_y);
                    min_cuts = min_cuts.min(cur_cuts);
                } // l
            } // k
        } // j
    } // i

    min_cuts
}

fn count_cuts(
    n: usize,
    trees: &[Tree],
    min_x: usize,
    max_x: usize,
    min_y: usize,
    max_y: usize,
) -> usize {
    let width = (max_x - min_x);
    let height = (max_y - min_y);
    let reqs = 2 * (width + height);

    let mut cur_cuts: usize = 0;
    let mut cur_material: usize = 0;
    let mut possible_cut_trees: Vec<usize> = Vec::new();

    for tree in trees.iter() {
        let is_inside = tree.x >= min_x && tree.x <= max_x && tree.y >= min_y && tree.y <= max_y;

        if is_inside {
            possible_cut_trees.push(tree.fence)
        } else {
            cur_cuts += 1;
            cur_material += tree.fence;
        }
    }
    // 충분하면 자른만큼 반환
    if cur_material >= reqs {
        return cur_cuts;
    }

    let mut falta = reqs - cur_material;

    possible_cut_trees.sort_unstable_by(|a, b| b.cmp(a));

    for material in possible_cut_trees.iter() {
        cur_cuts += 1;

        if material >= &falta {
            return cur_cuts;
        } else {
            falta -= material;
        }
    }
    n // return n; 
}

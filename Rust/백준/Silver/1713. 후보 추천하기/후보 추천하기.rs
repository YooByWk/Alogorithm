use std::{collections::HashMap, io::{self, Read}};
use std::cmp::Ordering;

#[derive(Debug, Clone)]
struct FrameEntry {
    id: usize,
    count: i32,
    time: usize,
}

pub fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).expect("Failed to read input.");
    
    let mut lines = input.lines();
    
    let n: usize = lines.next().expect("N not found").parse().expect("N is invalid");
    let _total_recom: usize = lines.next().expect("Total recommendation count not found").parse().expect("Total recommendation count is invalid");
    let cands: Vec<usize> = lines.next().expect("Candidates list not found")
        .split_ascii_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

    let mut photo_frame: Vec<FrameEntry> = Vec::with_capacity(n);
    let mut id_to_index: HashMap<usize, usize> = HashMap::new();
    
    for (time_order, cand_id) in cands.into_iter().enumerate() {
        
        if let Some(&index) = id_to_index.get(&cand_id) {
            photo_frame[index].count += 1;
        } else {
            
            if photo_frame.len() == n {
                
                let (min_index, min_id) = photo_frame.iter().enumerate()
                    .min_by(|(_, a), (_, b)| {
                        match a.count.cmp(&b.count) {
                            Ordering::Equal => a.time.cmp(&b.time),
                            other => other,
                        }
                    })
                    .map(|(index, entry)| (index, entry.id))
                    .expect("Frame cannot be empty.");

                id_to_index.remove(&min_id); 
                photo_frame.remove(min_index);
                
                for (new_index, entry) in photo_frame.iter().enumerate() {
                    if let Some(old_index) = id_to_index.get_mut(&entry.id) {
                        *old_index = new_index;
                    }
                }
            }
            
            let new_entry = FrameEntry {
                id: cand_id,
                count: 1, 
                time: time_order,
            };
            
            let new_index = photo_frame.len(); 
            photo_frame.push(new_entry);
            id_to_index.insert(cand_id, new_index);
        }
    }

    let mut result_ids: Vec<usize> = photo_frame.into_iter().map(|entry| entry.id).collect();
    result_ids.sort_unstable();
    
    println!("{}", result_ids.into_iter().map(|id| id.to_string()).collect::<Vec<String>>().join(" "));
}
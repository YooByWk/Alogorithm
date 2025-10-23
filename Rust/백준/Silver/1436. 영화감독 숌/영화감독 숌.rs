use std::{
    fmt::Error,
    io::{self, Read},
};

pub fn main() -> Result<(), Error> {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).expect("N expected");

    let n: usize = input.trim().parse().expect("number expected");

    let mut count_666: usize = 0;
    let mut cur_num: usize = 665;

    let mut res_num: usize = 0;

    while count_666 < n {
        cur_num += 1;

        if cur_num.to_string().contains("666") {
            count_666 += 1;
            res_num = cur_num;
        }
    }

    println!("{}", cur_num);

    Ok(())
}

function solution(num_list) {
    var answer = 0;
    let i = 0 
    let flag
    for (t of num_list) {
        if (t < 0) {
             answer = i
             flag = true
            break
        } 
        i++
    }
    return flag? answer : -1 ;
}
function solution(num_list) {
    var answer = [];
    let odd = 0
    let even = 0 
    num_list.forEach((num) => {
        num % 2 === 0 ? even++ : odd++
    })
    answer.push(even, odd)
    return answer;
}
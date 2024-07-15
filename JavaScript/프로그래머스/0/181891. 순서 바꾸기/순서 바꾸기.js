function solution(num_list, n) {
    let left = num_list.slice(n)
    let right = num_list.slice(0,n)
    const answer = [...left, ...right]
    return answer;
}
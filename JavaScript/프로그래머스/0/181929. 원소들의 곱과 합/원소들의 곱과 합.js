function solution(num_list) {
    var answer = 0;
    temp_mult = 1
    temp_sum = 0
    num_list.forEach((x) => {
        temp_sum += x;
        temp_mult *= x;
    })
    answer = temp_sum ** 2> temp_mult  ? 1 : 0
    return answer;
}
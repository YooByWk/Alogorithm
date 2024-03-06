function solution(a, b) {
    var answer = 0;
    var A = Number(String(a) + String(b))
    var B = Number(String(b) + String(a))
    answer = A > B ? A : B
    return answer;
}
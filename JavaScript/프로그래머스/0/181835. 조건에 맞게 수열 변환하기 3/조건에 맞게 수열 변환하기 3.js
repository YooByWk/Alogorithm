function solution(arr, k) {
    var answer = [];
    if (k % 2 === 1) {
        answer = arr.map((el) => el * k)
    } else {
        answer = arr.map((el) => el + k)
    }
    
    return answer;
}
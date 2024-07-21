function solution(arr, k) {
    const set = new Set(arr)
    let answer = [...set]
    if (answer.length > k) { answer.splice(k)}
    if (answer.length < k) {
        for (let i = answer.length ; i < k; i++) {
            answer.push(-1)
        }
    }
    return answer;
}
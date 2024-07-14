function solution(arr, intervals) {
    var answer = [];
    for (interval of intervals) {
        let [start,end] = interval
        answer.push(...arr.slice(start,end + 1))
        
    }
    return answer;
}
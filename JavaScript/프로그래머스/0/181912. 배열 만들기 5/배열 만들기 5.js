function solution(intStrs, k, s, l) {
    var answer = [];
    // k보다 큰 것
    intStrs.forEach((targetStr) => {
        let tmpnum = Number(targetStr.substring(s, s+l))
        return (tmpnum > k && answer.push(tmpnum))
    } )
    // 각 원소의 s번 인덱스보다 큰 것
    // s번부터 시작한 길이 l
    return answer;
}
function solution(strArr) {
    var answer = strArr.filter((a) => {
        return !a.includes('ad')
    });
    return answer;
}
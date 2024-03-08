function solution(a, d, included) {
    var answer = 0;
    nums = included.length -1 ;
    arr = [a];
    sums = included[0]? [0] : [];
    for (let i = 1;i <=nums; i++ ) {
        arr.push(a + d * i);
        if (included[i] == true){
            sums.push(i);
        }
    }
    sums.forEach((x) => {
        answer += arr[x]
    })
    return answer;
}
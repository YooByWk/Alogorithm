function solution(arr, queries) {
    var answer = [];
    for ([s,e] of queries) {
        for (s; s <= e; s++) {
            arr[s] = arr[s] + 1
        }
    }
    return arr;
}
function solution(arr1, arr2) {
    var answer = 0;
    // arr2 가 크면 -1
    // arr1 가 크면 1
    // 같다면 0 
    let arr1Len = arr1.length
    let arr2Len = arr2.length
    if (arr1Len > arr2Len ) {
        return 1
    } else if (arr2Len > arr1Len) { return -1}
    else {
        let arr1Sum = arr1.reduce((acc,cur) => acc + cur)
        let arr2Sum = arr2.reduce((acc,cur) => acc + cur)
        if (arr1Sum > arr2Sum) return 1
        if (arr1Sum < arr2Sum) return -1
        if (arr1Sum === arr2Sum) return 0 
    } 
    
    return answer;
}
function solution(arr) {
    var answer = [[]];
    const rLen = arr.length
    const cLen = arr[0].length
    if (rLen > cLen) {
        // 각 요소에 추가해주기
        let todo = rLen - cLen
        for (tArr of arr)
        {for (let i = 0; i < todo; i++){
            tArr.push(0)
        }}
        return arr
    }    
    else if (rLen < cLen) {
        // 한 줄 추가해주기
        for (let i = rLen; i < cLen; i++)
        {arr.push(new Array(cLen).fill(0))}
    } 
    return arr;
}
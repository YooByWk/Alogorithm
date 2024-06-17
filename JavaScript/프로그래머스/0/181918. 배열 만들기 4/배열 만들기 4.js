function solution(arr) {
    var stk = [];
    let i = 0
    while (i < arr.length) {
        if (stk.length === 0 ) {
            stk.push(arr[i])
            i++
        } else {
            let last = stk.at(-1)
            if (last < arr[i]){
                stk.push(arr[i])
                i++
            }else if(last >= arr[i]) {
                stk.pop()
            }
        }
    }
    return stk;
}
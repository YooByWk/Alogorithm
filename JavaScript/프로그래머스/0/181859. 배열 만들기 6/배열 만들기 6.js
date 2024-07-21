function solution(arr) {
    var stk = [];
    // stk 
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i])
        } else if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop()
        } else {
            stk.push(arr[i])
        }
    }
    
    return stk.length > 0 ? stk : [-1]
    
}
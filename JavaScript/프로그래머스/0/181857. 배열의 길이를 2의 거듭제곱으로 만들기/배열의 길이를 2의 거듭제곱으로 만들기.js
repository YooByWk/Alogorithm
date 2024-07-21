function solution(arr) {
    const around = Math.ceil(Math.log2(arr.length))
    const zero = 2**around - arr.length
    for (let i=0; i < zero; i++){
        arr.push(0)
    }
    return arr;
}
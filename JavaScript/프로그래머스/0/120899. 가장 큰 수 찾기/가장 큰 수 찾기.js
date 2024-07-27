function solution(array) {
    var answer = [];
    let tmp = array.slice(0,array.length).sort((a,b) => (b - a))
    const max = tmp[0]
    const idx = array.indexOf(max)
    return [max,idx];
}
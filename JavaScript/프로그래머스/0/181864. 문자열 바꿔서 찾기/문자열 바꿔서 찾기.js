function solution(myString, pat) {
    var changed = '';
    for (let str of myString) {
        if (str === 'A') {changed += 'B'}
        else {changed += "A"}
    }
    
    
    return changed.includes(pat) ? 1 : 0;
}
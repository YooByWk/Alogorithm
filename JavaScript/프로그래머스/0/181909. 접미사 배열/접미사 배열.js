function solution(my_string) {
    const fix = []
    const n = my_string.length
    
    for (let i = 0; i < n; i++){
        fix.push(my_string.substring(i))
    }
    
    fix.sort()
    
    return fix;
}
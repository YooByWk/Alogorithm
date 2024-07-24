function solution(s) {
    let cnt = {}
    for (let char of s) {
        if (cnt[char]) {
            cnt[char]++
        } else {
            cnt[char] = 1
        }
    }
    
    let one = []
    for (let char in cnt) {
        if (cnt[char] === 1) {
            one.push(char)
        }
    }
    
    one.sort()
    
    return one.join('')
    
}
function solution(n, words) {
    var answer = [0,0];
    const wordSet = new Set
    let person = 1
    
    for (const idx in words) {
        if (idx  <  1) {
            wordSet.add(words[idx])
            person++ 
        } else {
            const prevWordLen = words[idx - 1 ].length
            if (
                words[idx - 1][prevWordLen - 1] === words[idx][0] 
                && 
                !wordSet.has(words[idx])
            ) {
                wordSet.add(words[idx])
                person++
            } else {
                return [idx %  n + 1, Math.floor(wordSet.size / n)+ 1]
            }
        }
    }
    return answer;
}
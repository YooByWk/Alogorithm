function solution(numbers, direction) {
    var answer = [];
    if (direction === 'right')  {
        tmp = numbers.pop()
        answer.push(tmp)
        answer.push(...numbers)
        
    } else {
        tmp = numbers.shift()
        answer.push(...numbers)
        answer.push(tmp)
    }
    
    
    return answer;
}
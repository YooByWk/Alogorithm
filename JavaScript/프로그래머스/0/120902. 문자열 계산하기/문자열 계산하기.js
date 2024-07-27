function solution(my_string) {
    let tokens = my_string.split(' ');
    
    let result = parseInt(tokens[0]);
    
    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let nextNumber = parseInt(tokens[i + 1]);
        
        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        }
    }
    
    return result;
}
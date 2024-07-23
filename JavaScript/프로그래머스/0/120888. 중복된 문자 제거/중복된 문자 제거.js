function solution(my_string) {
    let seen = new Set();
    let result = '';

    for (let char of my_string) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

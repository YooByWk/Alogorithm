function solution(myString, pat) {
    let count = 0;
    for (let start = 0; start <= myString.length - pat.length; start++) {
        let test = myString.slice(start, start + pat.length);
        if (test === pat) {
            count++;
        }
    }

    return count;
}


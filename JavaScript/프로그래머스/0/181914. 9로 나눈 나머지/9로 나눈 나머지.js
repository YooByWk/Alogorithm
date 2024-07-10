function solution(number) {
    var answer = 0;
    let sum = 0;
    [...number].forEach((N) => {
        return sum += Number(N)
    }) 
    console.log(sum % 9)
    return sum % 9;
}
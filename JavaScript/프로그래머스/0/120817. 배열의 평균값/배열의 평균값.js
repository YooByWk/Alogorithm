function solution(numbers) {
    var answer = 0;
    numbers.forEach((a) => {
        console.log(+a)
        return answer += +a 
    })
    return ( answer / numbers.length);
}
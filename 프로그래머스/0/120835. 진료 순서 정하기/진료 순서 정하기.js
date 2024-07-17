function solution(emergency) {
    var answer = [];
    let testEmergency = emergency.slice().sort((a,b) => b - a)
    console.log(testEmergency)
    for (let i = 0 ; i < emergency.length ; i++ ) {
        answer.push(testEmergency.indexOf(emergency[i]) +1)
    }
    // indexOf
    return answer;
}
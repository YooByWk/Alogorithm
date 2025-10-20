function solution(answers) {
    const answer = [];
    
    // 수포자들이 찍는 패턴을 우선 찾아야 한다.
    // 1번 수포자
    // [1,2,3,4,5]
    // 2번 수포자
    // [2,1,2,3,2,4,2,5]
    // 3번 수포자
    // [3,3,1,1,2,2,4,4,5,5]
    
    // 0번부터 시작할것
    const scores = [0,0,0]
    const supoza = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    // 한 문제에 대해 한명씩 대입해보자
    for (let i = 0; i < answers.length; i++) { 
        // 문제
        const answer = answers[i];
        for (let j = 0; j < 3; j++) {
            // 답안
            if (answer === supoza[j][i % supoza[j].length]) {
                scores[j]++
            }
        }
    }
    
    const maxScore = Math.max(...scores)
    
    // 동점자 발생시 오름차 순
    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) {
            answer.push(i + 1)
        }
    }
    
    
    return answer;
}
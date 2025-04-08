function solution(survey, choices) {
    const typeScores = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };
    
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split('')
        const choice  = choices[i]
        
        if (choice < 4) {
            const score = 4 - choice
            typeScores[disagree] += score
        } else if (choice > 4) {
            const score = choice - 4
            typeScores[agree] += score
        } 
    }
    
    let answer = ''

    answer = merge('R','T',answer)
    answer = merge('C','F',answer)
    answer = merge('J','M',answer)
    answer = merge('A','N',answer)
    
    /**
    * type1 str
    * type2 str
    * answer str
    */
    function merge(type1, type2, answer) {
        if (typeScores[type1] >= typeScores[type2]) {
            answer += type1;
        } else {
            answer += type2;
        }
        return answer
    } 
    
    return answer;
}
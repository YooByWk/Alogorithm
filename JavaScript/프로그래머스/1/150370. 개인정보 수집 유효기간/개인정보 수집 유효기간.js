function solution(today, terms, privacies) {
    var answer = [];
    const obj = {};
    const convertedToday  = convertDate(today)
    
    terms.forEach(term => {
        const [type, duration] = (term.split(" "));
        obj[type] = (+duration) * 28 ; // 모든 달은 28일
    })

    for (idx in privacies) {
        const [asignDate, type] = privacies[idx].split(" ");
        // let [year, month, day] = asignDate.split(".");
        const convertedDate = convertDate(asignDate) + obj[type]
        
        if (convertedDate <= convertedToday) {
            answer.push(+idx + 1)
        }
        
    };

    return answer;
}

function convertDate (dateStr ) {
    const [year, month, day] = dateStr.split(".").map(Number);
    const convertedDate = (year * 12 * 28) + (month * 28) + day
    return convertedDate
};
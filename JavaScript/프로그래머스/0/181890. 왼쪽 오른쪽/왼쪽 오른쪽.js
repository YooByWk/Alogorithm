function solution(str_list) {
    var answer = [];
    let lIdx = str_list.indexOf('l');
    let rIdx = str_list.indexOf('r');
    

    if (lIdx !== -1 && rIdx !== -1) {
        if (lIdx < rIdx) {
           
            answer = str_list.slice(0, lIdx);
        } else {
           
            answer = str_list.slice(rIdx + 1);
        }
    } else if (lIdx !== -1) {
       
        answer = str_list.slice(0, lIdx);
    } else if (rIdx !== -1) {
       
        answer = str_list.slice(rIdx + 1);
    }
    
    
    return answer;
}

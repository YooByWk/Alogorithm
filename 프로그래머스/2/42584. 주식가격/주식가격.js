/**
 * 주식가격이 떨어지지 않은 기간을 스택(단조 스택)을 사용하여 계산
 * @param {number[]} prices 초 단위로 기록된 주식 가격 배열
 * @returns {number[]} 각 시점별 가격이 떨어지지 않은 기간 (초)
 */
function solution(prices) {
    //  초기화
    var answer = new Array(prices.length).fill(0);
    
    const st = []; 
    st.push(0); 

    for (let i = 1; i < prices.length; i++) {
        while (st.length > 0 && prices[i] < prices[st[st.length - 1]]) {
            const past = st.pop(); // 가격이 떨어진 시점 
            // 기간 = 현재 시점(i) - 과거 시점(past)
            answer[past] = i - past;
        }
        
        st.push(i);
    }
    
    //  가격이 끝까지 떨어지지 않은 것들.
    const lastIndex = prices.length - 1;
    while (st.length > 0) {
        const past = st.pop();
        // 기간 = 배열의 마지막 인덱스 - 과거 시점 인덱스
        answer[past] = lastIndex - past;
    }
    
    return answer;
}
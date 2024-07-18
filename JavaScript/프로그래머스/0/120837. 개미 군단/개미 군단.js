function solution(hp) {
    var answer = 0;
    // 장군 5 병정 3 일 1 
    while (hp > 0) {
        if (hp >= 5) {
            answer++
            hp -= 5
        }
        else if (hp >= 3) {
            answer++
            hp -= 3
        }
        else {
            answer += hp
            hp = 0      
        }
    }
    return answer;
}
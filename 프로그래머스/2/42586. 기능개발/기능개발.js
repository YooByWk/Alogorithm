function solution(progresses, speeds) {
    var answer = [];
    
    // 한 번씩 시뮬하면 손해가 클 듯 하다. 
    
    
    // 미리 언제 끝나는가를 계산하자
    // T1 예시 : [7, 3, 9] 
    const ends = progresses.map(
        (progress,i) => Math.ceil((100 - progresses[i]) / speeds[i])
    )
    
    const q = []
    // 함수로 분리하는 것 보다, 명령형으로 하는게 편한 문제로 보인다.
    // 앞선 날 보다 뒤의 일정이 먼저 끝난다면 cnt를 증가시킨다. 
    // 뒤의 일정이 나중에 끝난다면 cnt  + 1 => 집어넣기 => 뒤의 날이 바로 작업이 됨 
    // 앞선 기능의 배포가 중요함
    
    // 첫 날 작업이 끝나는 데 걸리는 시간을 미리 넣는다.
    let curEndDay = ends[0]
    let cnt = 1; // 해당 배포는 미리 포함
    
    for (let i = 1; i < ends.length; i++) {
        // 첫 날 작업보다, 완성 시간이 빠르다면 배포 횟수가 1 증가한다.
        if (ends[i] <= curEndDay) {
            cnt += 1; // 개인적으로 후위 증가는 Rust 쓰듯 배제해보자.
        } else {
            // 앞선 일정보다 오래 걸린다. 
            // 앞의 
            answer.push(cnt)
            curEndDay= ends[i]
            cnt = 1;
        }
    }
    answer.push(cnt)
    //
    
    return answer;
}
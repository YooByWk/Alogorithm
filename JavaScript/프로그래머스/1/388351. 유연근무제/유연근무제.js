function solution(sch, timelogs, startday) {
    // startday 는 나중에 계산할 때 1 낮춰서 생각하기. 
    var answer = 0;
    const people = sch.length;
    let attendance = get2DArray(people)
    
    for (let i = 0; i < people; i++ ) { // 사원 수 만큼 순회
        const employeeSchedule = sch[i]
        const [tmptargetHour, tmptargetMinute ] = getHourAndMinute(employeeSchedule)
        const [targetHour,targetMinute] = getTarget(tmptargetHour, tmptargetMinute )
        // 데드라인은 +10분 
        
        // 해당 사원의 7일 이력 순회
        for (let j = 0; j < 7; j++) {
            // 6 토 0 일 
            const day = (startday + j)  % 7
            const arrivalTime = timelogs[i][j]
            const [arrivalHour, arrivalMinute] = getHourAndMinute(arrivalTime) 
            

            // 1. 시간만 더 작을 때 ok
            // 2. 시간은 같고, 분이 더 큼 

            // 토, 일 패스해야 함
            if (day === 6 || day === 0) {
                attendance[i][j] = true
            } else if ( targetHour > arrivalHour || (targetHour === arrivalHour && targetMinute >= arrivalMinute)) {
                attendance[i][j] = true
            } else {attendance[i][j] = false} 
            // 이외에는 해당 값보다 같거나 작을때 true 아니면 false
            
        }
     }
    
    answer = validate(attendance)
    return answer;

}

// 2차원 배열 생성
function get2DArray(people) {
    let arr = new Array(people)
    for (let i = 0; i < people; i++) {
            arr[i] = new Array(7)
    }
    
    return arr
}

function getHourAndMinute(time) {
    const hour = Math.floor(time / 100)
    const minute = time % 100
    
    return [ hour,minute ]
}

function getTarget(hour, minute) {
    let tmpTargetMinute = minute + 10
    let targetMinute = tmpTargetMinute
    let targetHour = hour
    if (tmpTargetMinute >= 60) {
         targetMinute =  tmpTargetMinute - 60
         targetHour = hour + 1
    }
    
    return [targetHour, targetMinute ]
}

function validate(array) {
    let i = 0
    const test = array.map((innerArr,idx)=> {
        return innerArr.includes(false)
    })
    return test.filter((emp) => emp=== false ).length
} 
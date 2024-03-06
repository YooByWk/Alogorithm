function solution(my_string, overwrite_string, s) {
    var answer = [...my_string]
    answer.splice(s, overwrite_string.length, overwrite_string) 
    // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
    return answer.join('');
}
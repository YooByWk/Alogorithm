function solution(arr, delete_list) {
    var answer = [];
    for (let del of delete_list) {
        // 문과생 살려조
        arr = arr.filter((el) => el !== del)
        
    }
    
    return arr;
}
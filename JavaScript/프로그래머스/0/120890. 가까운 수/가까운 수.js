function solution(array, n) {
    var closest = array[0];
    var minDifference = Math.abs(array[0] - n);

    for (let num of array) {
        let difference = Math.abs(num - n);
        if (difference < minDifference || (difference === minDifference && num < closest)) {
            closest = num;
            minDifference = difference;
        }
    }

    return closest;
}

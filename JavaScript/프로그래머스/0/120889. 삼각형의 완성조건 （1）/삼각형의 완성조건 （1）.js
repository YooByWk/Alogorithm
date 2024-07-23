function solution(sides) {
    const maxSide = Math.max(...sides);
    const sumOfOtherSides = sides.reduce((sum, side) => sum + side, 0) - maxSide;
    if (maxSide < sumOfOtherSides) {
        return 1;
    } else {
        return 2;
    }
}

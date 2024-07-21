function solution(myStr) {
    const splitStr = myStr.split(/[abc]/);
    const result = splitStr.filter(s => s !== "");
    return result.length > 0 ? result : ["EMPTY"];
}
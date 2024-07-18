function solution(myString, pat) {
    let longestSubstring = "";

    for (let i = 0; i < myString.length; i++) {

        let substring = myString.substring(0, i + 1);

        if (substring.endsWith(pat)) {
            longestSubstring = substring;
        }
    }
    
    // 가장 긴 부분 문자열 반환
    return longestSubstring;
}
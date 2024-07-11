function solution(my_string, is_suffix) {
    const regex = new RegExp(`${is_suffix}$`);
    return regex.test(my_string) ? 1 : 0;
}
#include <stdio.h>

int main() {
    int A, B, C;
    scanf("%d %d", &A, &B); // 현재 시각 입력
    scanf("%d", &C);        // 요리 시간 입력

    int totalMinutes = A * 60 + B + C;
    int hour = (totalMinutes / 60) % 24; // 24시간제 처리
    int minute = totalMinutes % 60;

    printf("%d %d\n", hour, minute);
    return 0;
}

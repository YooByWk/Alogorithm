#include <iostream>
using namespace std;

int main() {
    int A, B, C;
    cin >> A >> B; // 현재 시각 입력
    cin >> C;      // 요리 시간 입력

    int totalMinutes = A * 60 + B + C;
    int hour = (totalMinutes / 60) % 24; // 24시간제 처리
    int minute = totalMinutes % 60;

    cout << hour << " " << minute << endl;
    return 0;
}

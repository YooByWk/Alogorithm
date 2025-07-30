
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  static int MaxNum = -1;
  static int N;
  static int K;
  static int[] el;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    K = Integer.parseInt(st.nextToken());
    el = new int[K];

    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < K; i++) {
      el[i] = Integer.parseInt(st.nextToken());
    }
    br.close();
    rec("");
    System.out.println(MaxNum);
  }

  static void rec(String curNumStr) {

    // 재귀 기저 조건
    if (curNumStr.length() > 0) {
      // 문자 -> 숫자
      int intNum = Integer.parseInt(curNumStr);

      if (intNum > N) {
        return;
      }
      // 대충 제일 큰 숫자랑 비교
      MaxNum = Math.max(intNum, MaxNum);
    }

    // 다음 재귀 호출
    for (int i = 0; i < K; i++) {
      // 다음 숫자 만들기
      String newStr = curNumStr + Integer.toString(el[i]);
      // 호출
      if (newStr.length() <= Integer.toString(N).length()) {
        rec(newStr);
      }
    }
  }
}

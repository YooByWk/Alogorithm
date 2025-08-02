import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int N = Integer.parseInt(st.nextToken());
    int X = Integer.parseInt(st.nextToken());

    int[] accArr = new int[N + 1];

    st = new StringTokenizer(br.readLine());

    for (int i = 1; i <= N; i++) {
      int curNum = Integer.parseInt(st.nextToken());
      accArr[i] = curNum + accArr[i - 1];
    }
    int maxNum = 0;
    int days = 0;

    for (int i = X; i <= N; i++) {
      int curVal = accArr[i] - accArr[i - X];

      if (curVal > maxNum) {
        maxNum = curVal;
        days = 1;
      } else if (curVal == maxNum) {
        days++;
      }
    }
    if (maxNum == 0) {
      System.out.println("SAD");
    } else {
      System.out.println(maxNum);
      System.out.println(days);
    }
  }
}

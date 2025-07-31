import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
  static Pair[] dp = new Pair[41];

  static final class Pair {
    final int zeroCnt;
    final int oneCnt;

    public Pair(int zeroCnt, int oneCnt) {
      this.zeroCnt = zeroCnt;
      this.oneCnt = oneCnt;
    }
  }

  public static void createDp() {
    dp[0] = new Pair(1, 0);
    dp[1] = new Pair(0, 1);
    for (int i = 2; i <= 40; i++) {
      int zeroCnt = dp[i - 1].zeroCnt + dp[i - 2].zeroCnt;
      int oneCnt = dp[i - 1].oneCnt + dp[i - 2].oneCnt;
      dp[i] = new Pair(zeroCnt, oneCnt);
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    int T = Integer.parseInt(br.readLine());

    createDp();
    for (int i = 0; i < T; i++) {
      int target = Integer.parseInt(br.readLine());
      Pair ans = dp[target];
      sb.append(ans.zeroCnt)
          .append(' ')
          .append(ans.oneCnt)
          .append('\n');
    }
    System.out.println(sb);
  }
}
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    br.close();
    int[] dp = new int[46];
    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i < 46; i++) {
      dp[i] = dp[i - 2] + dp[i - 1];
    }
    System.out.println(dp[N]);
  }
}

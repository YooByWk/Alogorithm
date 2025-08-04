import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());
    int lqs[] = new int[N];

    StringTokenizer st = new StringTokenizer(br.readLine());
    for (int i = 0; i < N; i++) {
      lqs[i] = Integer.parseInt(st.nextToken());
    }

    Arrays.sort(lqs);

    int minV = Integer.MAX_VALUE;
    int head = 0;
    int tail = N - 1;

    int[] ans = new int[2];

    while (head < tail) {
      int tmpV = lqs[head] + lqs[tail];
      // 우선 abs 파악 : 0에 가까운지 파악
      if (Math.abs(minV) > Math.abs(tmpV)) {
        ans[0] = lqs[head];
        ans[1] = lqs[tail];
        minV = tmpV;
      }

      // 0 보다 작다면 -> head++
      if (tmpV == 0) {
        break;
      } else if (tmpV < 0) {
        head++;
      } else {
        // 0 보다 크다면 -> head--
        tail--;
      }

    }

    System.out.println(ans[0] + " " + ans[1]);
  }
}
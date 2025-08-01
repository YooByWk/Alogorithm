import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    int memo[][] = new int[N][];
    int tri[][] = new int[N][];

    // 삼각형 입력
    for (int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int lineLen = st.countTokens();
      tri[i] = new int[lineLen];
      memo[i] = new int[lineLen];

      for (int j = 0; j < lineLen; j++) {
        tri[i][j] = Integer.parseInt(st.nextToken());
      }
    }

    // 꼭대기에서부터 내려간다.
    memo[0][0] = tri[0][0];

    for (int layer = 0; layer < N; layer++) {
      int[] curLayer = memo[layer];
      if (layer + 1 == N) {
        break;
      }
      int[] nextLayer = tri[layer + 1];
      for (int element = 0; element < curLayer.length; element++) {
        // 다음 층 확인 - layer + 1 && 자신과 같은 인덱스 = left, layer +1 && idx + 1 = right
        int tmpLeft = curLayer[element] + nextLayer[element];
        int tmpRight = curLayer[element] + nextLayer[element + 1];

        // 기존 값과 확인
        memo[layer + 1][element] = Math.max(tmpLeft, memo[layer + 1][element]);
        memo[layer + 1][element + 1] = Math.max(tmpRight, memo[layer + 1][element + 1]);
      }
    }
    Arrays.sort(memo[N - 1]);
    System.out.println(memo[N - 1][memo[N - 1].length - 1]);
  }
}
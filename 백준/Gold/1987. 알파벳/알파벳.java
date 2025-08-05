import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
  static int R, C;
  static char[][] letterArr;
  static int[] dr = { -1, 1, 0, 0 };
  static int[] dc = { 0, 0, -1, 1 };
  static int ans;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer stringTk = new StringTokenizer(br.readLine());
    R = Integer.parseInt(stringTk.nextToken());
    C = Integer.parseInt(stringTk.nextToken());

    letterArr = new char[R][C];

    Set<Character> passed = new HashSet<>();

    for (int r = 0; r < R; r++) {
      String line = br.readLine();
      for (int c = 0; c < C; c++) {
        letterArr[r][c] = line.charAt(c);
      }
    }
    passed.add(letterArr[0][0]);
    dfs(0, 0, 1, passed);

    System.out.println(ans);
  } // void main

  public static void dfs(int r, int c, int depth, Set<Character> visited) {
    ans = Math.max(ans, depth);

    for (int i = 0; i < 4; i++) {
      int newR = r + dr[i];
      int newC = c + dc[i];

      // 백트레킹
      if (newR >= 0 && newR < R
          && newC >= 0 && newC < C
          && !visited.contains(letterArr[newR][newC])) {
        visited.add(letterArr[newR][newC]);
        dfs(newR, newC, depth + 1, visited);
        visited.remove(letterArr[newR][newC]);
      }
    }

  }
}
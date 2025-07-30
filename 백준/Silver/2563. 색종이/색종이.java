
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());

    boolean[][] paper = new boolean[100][100];

    int colourX, colourY;
    int black = 0;

    for (int i = 0; i < N; i++) {
      // 색종이
      StringTokenizer st = new StringTokenizer(br.readLine());
      colourX = Integer.parseInt(st.nextToken());
      colourY = Integer.parseInt(st.nextToken());
      for (int x = colourX; x < colourX + 10; x++) {
        for (int y = colourY; y < colourY + 10; y++) {
          if (!paper[y][x]) {
            paper[y][x] = true;
          }
        }
      }
    }
    br.close();
    // 흰 종이
    for (int x = 0; x < 100; x++) {
      for (int y = 0; y < 100; y++) {
        if (paper[x][y])
          black++;
      }
    }
    System.out.println(black);
  }
}
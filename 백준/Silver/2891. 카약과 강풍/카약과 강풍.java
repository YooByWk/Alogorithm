import java.io.*;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int N, S, R;

    N = Integer.parseInt(st.nextToken());
    S = Integer.parseInt(st.nextToken());
    R = Integer.parseInt(st.nextToken());

    boolean[] damagedTeams = new boolean[N + 1];
    boolean[] spareTeams = new boolean[N + 1];

    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < S; i++) {
      int teamNum = Integer.parseInt(st.nextToken());
      damagedTeams[teamNum] = true;
    }

    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < R; i++) {
      int teamNum = Integer.parseInt(st.nextToken());
      spareTeams[teamNum] = true;
    }

    int ans = S;

    // 1. 자신의 카약이 손상된 팀 제거
    for (int i = 1; i <= N; i++) {
      if (damagedTeams[i] && spareTeams[i]) {
        damagedTeams[i] = false;
        spareTeams[i] = false;
        ans--;
      }
    }

    // 2. 인접 팀 빌려줌
    for (int i = 1; i <= N; i++) {
      if (spareTeams[i]) {
        // 왼쪽 팀
        if (i > 1 && damagedTeams[i - 1]) {
          damagedTeams[i - 1] = false;
          ans--;
        }
        // 오른쪽 팀
        else if (i < N && damagedTeams[i + 1]) {
          damagedTeams[i + 1] = false;
          ans--;
        }
      }
    }

    System.out.println(ans);
  }
}
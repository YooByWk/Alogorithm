import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;


public class Main {
  static int[] dr = {-1, 1, 0, 0};
  static int[] dc = {0, 0, -1, 1};
  
  static class Point {
    int r, c, dist;
    
    public Point(int r, int c, int dist) {
      this.r = r;
      this.c = c;
      this.dist = dist;
    }
  }
  
  private static int bfs(int startR, int startC, int R, int C, char[][] map) {
    boolean[][] visited = new boolean[R][C];
    Queue<Point> q = new LinkedList<>();
    
    q.offer(new Point(startR, startC, 0));
    visited[startR][startC] = true;
    
    int maxDist = 0;
    
    while (!q.isEmpty()) {
      Point cur = q.poll();
      maxDist = Math.max(maxDist, cur.dist);
      
      for (int i = 0; i < 4; i++) {
        int nr = cur.r + dr[i];
        int nc = cur.c + dc[i];
        
        if (nr >= 0 && nr< R && nc >= 0 && nc < C && !visited[nr][nc] && map[nr][nc] == 'L') {
          visited[nr][nc] = true;
          q.offer(new Point(nr, nc, cur.dist + 1));
        }
      }
    }
    return maxDist;
  }
  
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    
    int R = Integer.parseInt(st.nextToken());
    int C = Integer.parseInt(st.nextToken());
    
    char[][] map = new char[R][C];
    
    for ( int i = 0; i < R; i++) {
      String line = br.readLine();
      for (int j = 0; j < C; j++) {
        map[i][j] = line.charAt(j);
      }
    } 
    br.close();
    
    // BFS 
    int MDist = 0;
    for (int r = 0; r < R; r++) {
      for (int c = 0; c < C; c++) {
        if (map[r][c] == 'L') {
          int curMaxDist = bfs(r,c,R,C,map);
          MDist = Math.max(MDist, curMaxDist);
        }
      }
    }
    System.out.println(MDist);
  }
}
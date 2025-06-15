import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
  static int N;
  static int[][] grid;
  static int[][] dist;
  static int[] dr = {-1, 1, 0, 0};
  static int[] dc = {0,0, -1, 1};
  
  static int tc = 1;
  
  static StringBuilder sb = new StringBuilder();
  
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    while (true) {
      N = Integer.parseInt(br.readLine());
      
      if (N == 0) {
        break;
      }
      
      grid = new int[N][N];
      dist = new int[N][N];
      
      input(br);
      dijkstra();
      
      sb.append("Problem ").append(tc++).append(": ").append(dist[N-1][N-1]).append("\n");
    }
    br.close();
    System.out.println(sb);
  }
  
  static void input(BufferedReader br) throws  IOException {
    for (int r = 0; r < N; r++) {
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      for (int c = 0; c < N; c++) {
        grid[r][c] = Integer.parseInt(st.nextToken());
        dist[r][c] = Integer.MAX_VALUE;
      }
    }
  }
  
  static void dijkstra() throws IOException {
    PriorityQueue<Node> pq = new PriorityQueue<>((o1,o2) -> o1.cost - o2.cost );
    
    dist[0][0] = grid[0][0];
    pq.add(new Node(0, 0, grid[0][0]));
    
    while (!pq.isEmpty()) {
      Node current = pq.poll();
      
      int currR = current.r;
      int currC = current.c;
      int currCost = current.cost;
      
      if (currCost > dist[currR][currC]) { 
        continue;
      }
      for (int i = 0; i < 4; i++) {
        int nextR = currR + dr[i];
        int nextC = currC + dc[i];
        
        if (nextR < 0 || nextR >= N || nextC < 0 || nextC >= N) {
          continue;
        }
        
        int nextCost = currCost + grid[nextR][nextC];
        
        if (nextCost < dist[nextR][nextC]) {
          dist[nextR][nextC] = nextCost;
          pq.add(new Node(nextR, nextC, nextCost));
        }
        
      }
      
    }
  }

  static class Node {
    int r ;
    int c;
    int cost; 
    
    public Node(int r, int c, int cost) {
      this.r = r;
      this.c = c;
      this.cost = cost;
    }
  }
  
  
}
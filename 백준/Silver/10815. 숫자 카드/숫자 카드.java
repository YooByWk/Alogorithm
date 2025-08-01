import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    
    int N = Integer.parseInt(br.readLine());
    Set<Integer> sangeun = new HashSet<>();
    
    
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    for (int i = 0 ; i < N ; i++) {
      sangeun.add(Integer.parseInt(st.nextToken()));
    }
    
    int M =  Integer.parseInt(br.readLine());
    st = new StringTokenizer(br.readLine(), " ");
    
    for (int i = 0; i < M; i++) {
      int t = Integer.parseInt(st.nextToken());
      if (sangeun.contains(t)) {
        sb.append('1');
      }
      else {
        sb.append('0');
      }
      sb.append(' ');
    }
    br.close();
    System.out.println(sb);
  }
}

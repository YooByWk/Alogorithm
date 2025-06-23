
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class Main {
  public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringBuilder sb = new StringBuilder();
      
      int N = Integer.parseInt(br.readLine());

      for (int i = 0; i < N; i++) {
        StringTokenizer st = new StringTokenizer(br.readLine());
        int r = Integer.parseInt(st.nextToken());
        int e = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        int calcd = r - e + c;
        
        if (calcd < 0 ) {
          sb.append("advertise \n");
        } else if (calcd == 0) {
           sb.append("does not matter \n");
        } else if (calcd > 0) {
           sb.append("do not advertise \n");
        }

      }
         br.close();
         System.out.println(sb);
  }
}

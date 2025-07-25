import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws  IOException{
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      int N = Integer.parseInt(br.readLine());
      
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      
      int[] t = new int[N];
      for (int i = 0; i < N; i++) {
        t[i] = Integer.parseInt(st.nextToken()); 
      }
      br.close();
      
      // 짧은 시간으로 정렬 -> 그리디
      Arrays.sort(t);
      
      int total = 0;
      int curAcc = 0;
      
      for (int i = 0; i < N; i++) {
        curAcc += t[i];
        total += curAcc;
      }
      System.out.println(total);
  }  
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    
    int P = Integer.parseInt(br.readLine());
    
    for (int t = 1; t <= P;t++ ) {
      String line = br.readLine();
      StringTokenizer st = new StringTokenizer(line, " ");
      
      int tc = Integer.parseInt(st.nextToken());
      
      // 학생 수는 20명
      ArrayList<Integer> heights = new ArrayList<>();
            
      // 걸음 수 초기화
      int totalSteps = 0;
      
      for (int i = 0; i < 20; i++) {
        int curHeight = Integer.parseInt(st.nextToken());          
        boolean isInserted = false;
        for (int j = 0; j < heights.size(); j++) {
          if (heights.get(j) > curHeight) {
            // 키가 더 큰 경우 - 이 앞에 들어가야 함.
            heights.add(j, curHeight);
            totalSteps += heights.size() - 1 - j ;
            isInserted = true;
            break;
          }
        }        
        if (!isInserted) {
          heights.add(curHeight);
        }
      }       
      sb.append(tc).append(" ").append(totalSteps).append('\n');        
    }
    br.close();
    System.out.println(sb.toString());
  }
}
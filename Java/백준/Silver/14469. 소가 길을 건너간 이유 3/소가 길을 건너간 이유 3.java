
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
  public static void main(String[] args) throws IOException{
    final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int N = Integer.parseInt(st.nextToken());
    
    Info[] infos = new Info[N];
    
    for (int i = 0; i < N; i++ ) {
      st = new StringTokenizer(br.readLine());
      
      int arrival = Integer.parseInt(st.nextToken());
      int check = Integer.parseInt(st.nextToken());
      
      infos[i] = new Info(arrival, check);
    }
    
    Arrays.sort(infos, (o1, o2) -> {
      return o1.arrival - o2.arrival; // Arrival에 맞춰 오름차순 정렬
    });

    int curTime = 0;
    for (Info info : infos ) {
      if (info.arrival > curTime) { 
        curTime = info.arrival; // 도착시간으로 바로 설정
        curTime += info.check; // 검문까지 바로
      } else {
        curTime += info.check;
      }
    }
  System.out.println(curTime);
  br.close();    
  } 
  
  static class Info {
    int arrival;
    int check;
    
    public Info (int arrival, int check) {
      this.arrival = arrival;
      this.check = check;
      
    }
  }
}

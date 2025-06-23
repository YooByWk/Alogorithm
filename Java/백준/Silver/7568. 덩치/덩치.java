import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main{
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
      
    int N = Integer.parseInt(br.readLine());
    
    People[] people = new People[N];
    
    for (int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      
      people[i] = new People(x,y);
    }
    br.close();
    
    StringBuilder sb = new StringBuilder();
    
    for (int i = 0; i < N; i++) {
      People curPeople = people[i];
      int biggerCnt = 0;
      
      for(int j = 0; j < N; j++) {
        
        if (j == i) continue;
        People targetPeople = people[j];
        
        if (curPeople.x < targetPeople.x && curPeople.y < targetPeople.y) {
          biggerCnt++;
        } 
        
      }  
      sb.append(biggerCnt + 1);
      sb.append(' ');
    }
    System.out.println(sb);
  }
  static class People {
    int x;
    int y; 
    
    public People(int x, int y) {
      this.x = x;
      this.y = y;
    }
  }
}





import java.util.Arrays;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    boolean[] S = new boolean[21];
    int N;
    
    N = sc.nextInt();
    sc.nextLine(); 

    StringBuilder sb = new StringBuilder();
    
    for (int i= 0 ; i < N ; i++) {
      String line = sc.nextLine();
      String cmd;
      
      String[] tmp  = line.split(" ");
      int target = -1;
      
      cmd = tmp[0];
      if (tmp.length > 1) { 
          target = Integer.parseInt(tmp[1]); 
      }
            
      switch (cmd) {
        case "add":
         if (!S[target]) {
          S[target] = true;
        }
          break;
      
        case "check":
          sb.append(S[target]? 1 : 0).append("\n");
          break;
        
        case "remove":
          if (S[target]) {
            S[target] = false;
          }
          break;  
        
        case "toggle":
          S[target] = !S[target];
          break;

        case "all": 
          Arrays.fill(S, true);
          break;
          
        case "empty": 
           Arrays.fill(S, false);
          break;
      }
    } 
    sc.close();
    System.out.println(sb.toString());
  }
}
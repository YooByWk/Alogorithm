
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Scanner;
import java.io.IOException;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // Scanner sc = new Scanner(System.in);
    boolean[] S = new boolean[21];
    // int N;
    // N = sc.nextInt();
    // sc.nextLine(); 
    int N = Integer.parseInt(br.readLine());

    
    
    StringBuilder sb = new StringBuilder();
    
    for (int i= 0 ; i < N ; i++) {
      // String line = sc.nextLine();
      String line = br.readLine();
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
    // sc.close();
    br.close(); 
    System.out.println(sb.toString());
  }
}
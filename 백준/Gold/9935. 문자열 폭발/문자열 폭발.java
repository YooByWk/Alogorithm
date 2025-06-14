import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException{
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      
      String str = br.readLine();
      String exp = br.readLine();
      br.close();

      StringBuilder res = new StringBuilder();
      int expLength = exp.length();
      
      for (int i = 0 ; i < str.length(); i++  ) {
        char curChar = str.charAt(i);
        
        res.append(curChar);
        
        if (res.length() >= expLength) {
          boolean match = true;
          for (int j = 0; j < expLength; j++) {
            if (res.charAt(res.length() - expLength + j) != exp.charAt(j)) {
              match = false;
              break;
            }
          }
          if (match) {
            res.setLength(res.length() - expLength);
          }
        }
      }
      
      if (res.length() == 0 ) {
        System.out.println("FRULA");
      } else {
        System.out.println(res);
      }

    }
}

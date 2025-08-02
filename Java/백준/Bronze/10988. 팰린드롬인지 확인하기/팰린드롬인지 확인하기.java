import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int ans = 1;
    String word = br.readLine();
    for (int i = 0; i < word.length(); i++) {
      if (word.charAt(i) != word.charAt(word.length() - i - 1)) {
        ans = 0;
      }
    }
    System.out.println(ans);
  }
}

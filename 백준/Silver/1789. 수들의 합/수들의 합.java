import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long S = Long.parseLong(br.readLine()); 
        br.close();

        long N = (long)((-1 + Math.sqrt(1 + 8.0 * S)) / 2.0);
        
        if (N * (N + 1) / 2 > S) {
            N--;
        }
        
        System.out.println(N);
    }
}
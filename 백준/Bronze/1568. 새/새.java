import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); 
        br.close(); 

        int K = 1;
        int T = 0; 

        while (N > 0) {
            if (K > N) {
                K = 1;
            }
            N -= K;
            T++;
            K++;
        }
        
        System.out.println(T);
    }
}
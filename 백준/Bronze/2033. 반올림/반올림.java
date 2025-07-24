import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        long N = Long.parseLong(br.readLine()); 
        br.close();
        long unit = 10; 

        while (unit / 10 <= N / 10) { 
            long remainder = N % unit; 

            if (remainder >= unit / 2) {
                N = N - remainder + unit;
            } else {
                N = N - remainder;
            }
            if (N == 0) { 
                break;
            }
            
            unit *= 10; 
        }

        System.out.println(N); 
    }
}
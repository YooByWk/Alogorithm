import java.io.BufferedReader; 
import java.io.InputStreamReader; 
import java.io.IOException; 

public class Main {
    public static void main(String[] args) throws IOException { 
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int A = Integer.parseInt(br.readLine());
        
        int B = Integer.parseInt(br.readLine());
        
        System.out.println(A + B);
        
        br.close();
    }
}
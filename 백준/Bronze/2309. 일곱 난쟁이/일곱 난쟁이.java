import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] dwarfs = new int[9];
        int totalSum = 0;

        for (int i = 0; i < 9; i++) {
            dwarfs[i] = Integer.parseInt(br.readLine());
            totalSum += dwarfs[i];
        }
        br.close();

        int excludeOne = -1; 
        int excludeTwo = -1; 
        boolean found = false; 

        for (int i = 0; i < 8; i++) {
            for (int j = i + 1; j < 9; j++) {
                if ((totalSum - dwarfs[i] - dwarfs[j]) == 100) {
                    excludeOne = i;
                    excludeTwo = j;
                    found = true; 
                    break;     
                }
            }
            if (found) { 
                break;  
            }
        }
        int[] ansDwarfs = new int[7];
        int idx = 0; 

        for (int i = 0; i < 9; i++) {
            if (i == excludeOne || i == excludeTwo) {
                continue;
            }
            ansDwarfs[idx++] = dwarfs[i];
        }
        Arrays.sort(ansDwarfs);

        for (int d : ansDwarfs) {
            System.out.println(d);
        }
    }
}
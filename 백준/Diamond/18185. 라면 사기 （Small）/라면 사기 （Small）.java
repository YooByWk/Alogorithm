import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        
        int[] A = new int[N + 2]; 
        for (int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        br.close();

        long totalCost = 0; 

        for (int i = 0; i < N; i++) {
            if (A[i] > 0) {
                if (i + 2 < N && A[i + 1] > A[i + 2]) {
                    int count2_special = Math.min(A[i], A[i + 1] - A[i + 2]);
                    totalCost += (long)count2_special * 5;
                    A[i] -= count2_special;
                    A[i + 1] -= count2_special;
                }

                if (i + 2 < N && A[i + 1] > 0 && A[i + 2] > 0) {
                    int count3 = Math.min(A[i], Math.min(A[i + 1], A[i + 2]));
                    totalCost += (long)count3 * 7;
                    A[i] -= count3;
                    A[i + 1] -= count3;
                    A[i + 2] -= count3;
                }
                
                if (i + 1 < N && A[i + 1] > 0) {
                    int count2 = Math.min(A[i], A[i + 1]);
                    totalCost += (long)count2 * 5; 
                    A[i] -= count2;
                    A[i + 1] -= count2;
                }

                totalCost += (long)A[i] * 3; 
                A[i] = 0;
            }
        }

        System.out.println(totalCost);
    }
}
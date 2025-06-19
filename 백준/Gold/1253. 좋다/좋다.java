import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    int N = Integer.parseInt(br.readLine());
    long[] A = new long[N];
    
    StringTokenizer st = new StringTokenizer(br.readLine());
    
    for (int i = 0; i < N; i++) {
      A[i] = Long.parseLong(st.nextToken());
    }
    
    Arrays.sort(A);
    
    int goodNumberCount = 0;
    
    for (int i = 0; i <N; i++) {
      long find = A[i];
      int left = 0;
      int right = N - 1 ;
      
      while (left < right) {
        long currentSum = A[left] + A[right];
        
        
        if (currentSum == find) {
            if (left != i && right !=i) {
          goodNumberCount++;
          break;
        } else if (left == i) {
            left++;
        } else {
          right--;
        }
        } else if (currentSum < find) {
          left++;
        } else {
          right--;
        }
      }
      }
    System.out.println(goodNumberCount);
    }
  }

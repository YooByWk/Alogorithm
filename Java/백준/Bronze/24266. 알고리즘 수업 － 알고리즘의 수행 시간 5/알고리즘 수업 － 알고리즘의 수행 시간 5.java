import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader b = new BufferedReader(new InputStreamReader(System.in));
        long N = Long.parseLong(b.readLine());
        long t = N * N * N;
        System.out.println(t);
        System.out.println(3);
        b.close();
    }
}
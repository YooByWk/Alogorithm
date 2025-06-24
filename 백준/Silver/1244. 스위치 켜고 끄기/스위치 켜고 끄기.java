import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class Main {
  static int[] switchs;
  static int switchN;
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    switchN = Integer.parseInt(br.readLine());
    switchs = new int[switchN + 1];
    StringTokenizer st = new StringTokenizer(br.readLine());
    
    for (int i = 1; i <= switchN; i++) {
      int curSwitch = Integer.parseInt(st.nextToken());
      switchs[i] = curSwitch;
    }
    
    // 학생 수
    int studentN = Integer.parseInt(br.readLine());
    Student[] students = new Student[studentN];
    
    for (int i = 0; i < studentN; i++) {
      st = new StringTokenizer(br.readLine());
      int gender = Integer.parseInt(st.nextToken()); 
      int number = Integer.parseInt(st.nextToken());
      students[i] = new Student(gender, number);
    }
    
    for (Student s : students) {
      if (s.gender == 1) {
        male(s.number);
      } else {
        female(s.number);
      }
    }
    
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= switchN; i++) {
      sb.append(switchs[i]);
      if (i % 20 == 0) {
        sb.append('\n');
      } else if (i < switchN) {
        sb.append(" ");
      }
    }    
    System.out.println(sb);
    br.close();
  }
  
  static class Student {
    int gender;
    int number;

    public Student(int gender, int number) {
      this.gender = gender;
      this.number = number;
    }
  }
  // 자기가 받은 수의 배수에 해당하는 스위치 상태 변경
  static void male(int number) {
    for (int i = 1; i * number <= switchN; i++) {
      switchs[i * number ] ^= 1;
    }
  }
  
  // 자기가 받은 수를 중심으로 대칭을 이루는 가장 큰 구간을 찾아서 상태 반전
  static void female(int number) {
    switchs[number] ^= 1;
    
    for (int i = 1;;i++) {
      int left = number - i;
      int right = number + i;
      
      if (left < 1 || right > switchN || switchs[left] != switchs[right]) {
        break;
      }

      switchs[left] ^= 1; 
      switchs[right] ^= 1;
    }
  }
}
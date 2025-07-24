
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;



public class Main {
  
  
  public enum OctoDigit {
    ZERO('-', 0),
    ONE('\\', 1),
    TWO('(',2),
    THREE('@',3),
    FOUR('?',4),
    FIVE('>',5),
    SIX('&',6),
    SEVEN('%',7),
    NEG_ONE('/',-1);
    
    private final char symbol;
    private final int value;
    
    OctoDigit(char symbol, int value) {
      this.symbol = symbol;
      this.value = value;
    }
    
    public int getValue() {
      return value;
    }
    
    public static OctoDigit fromSymbol(char symbol) {
      for (OctoDigit digit : OctoDigit.values()) {
        if (digit.symbol == symbol) {
          return digit;
        }
      }
      throw new IllegalArgumentException( "unknown symbol : " + symbol);
    }
  }
  
  public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringBuilder sb = new StringBuilder();
      
      String line;
      
      while ((line = br.readLine()) != null && !line.equals("#")) {
        long decimal = 0;
        int len = line.length();
        
        for (int i = 0; i < len; i ++) {
          char symbol = line.charAt(i);
          
          int digitVal = OctoDigit.fromSymbol(symbol).getValue();
          
          decimal += (long)digitVal * Math.pow(8, len - 1 - i);
        }
        sb.append(decimal).append('\n');
      }
      System.out.println(sb.toString());
      br.close();
  }
}
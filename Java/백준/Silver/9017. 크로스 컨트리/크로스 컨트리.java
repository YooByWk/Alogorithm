import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int T = Integer.parseInt(br.readLine());
    StringBuilder sb = new StringBuilder();
    
    for (int _n = 0; _n < T; _n++) {
      int N = Integer.parseInt(br.readLine());
      StringTokenizer st = new StringTokenizer(br.readLine());
      
      HashMap<Integer, Integer> teamCounts = new HashMap<>();
      
      int[] rank = new int[N]; 
      for (int i = 0; i < N; i++) {
        int curPlayerTeamId = Integer.parseInt(st.nextToken());
        rank[i] = curPlayerTeamId;
        teamCounts.put(curPlayerTeamId, teamCounts.getOrDefault(curPlayerTeamId, 0) + 1);
      }

      Set<Integer> under6 = new HashSet<>();
      for (int teamId : teamCounts.keySet()) {
        if (teamCounts.get(teamId) < 6) {
          under6.add(teamId);
        }
      }

      HashMap<Integer, Integer> teamPoints = new HashMap<>(); 
      HashMap<Integer, Integer> teamRankedPlayerCount = new HashMap<>(); 
      HashMap<Integer, Integer> fifth = new HashMap<>(); 
      
      int score = 1;
      
      for (int i = 0; i < N; i++) {
        int teamId = rank[i];
        if (under6.contains(teamId)) {
          continue; 
        }
        
        int rankedCnt = teamRankedPlayerCount.getOrDefault(teamId, 0);
        
        if (rankedCnt < 4) {
          teamPoints.put(teamId, teamPoints.getOrDefault(teamId, 0) + score);
          teamRankedPlayerCount.put(teamId, rankedCnt + 1);
        } else if (rankedCnt == 4) {
          fifth.put(teamId, score);
          teamRankedPlayerCount.put(teamId, rankedCnt + 1);
        }

        score++;
      }
      
      List<Map.Entry<Integer, Integer>> sortedTeams = new ArrayList<>(teamPoints.entrySet());
     
      Collections.sort(sortedTeams, (Map.Entry<Integer, Integer> team1, Map.Entry<Integer, Integer> team2) -> {
          int score1 = team1.getValue();
          int score2 = team2.getValue();
          
          if (score1 != score2) {
              return Integer.compare(score1, score2);
          } else {
              int fifthScore1 = fifth.getOrDefault(team1.getKey(), Integer.MAX_VALUE);
              int fifthScore2 = fifth.getOrDefault(team2.getKey(), Integer.MAX_VALUE);
              return Integer.compare(fifthScore1, fifthScore2);
          }
      });

      if (!sortedTeams.isEmpty()) {
          sb.append(sortedTeams.get(0).getKey()).append("\n");
      } 
    }
    
    System.out.print(sb.toString()); 
    br.close(); 
  }  
}
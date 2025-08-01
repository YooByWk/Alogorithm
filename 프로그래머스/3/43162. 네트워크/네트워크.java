class Solution {
    static boolean visited[] = new boolean[200];
    static int answer = 0;
    static int[][] computers;
    public int solution(int n, int[][] c) {
        computers = c;    
    
        for (int i = 0; i < computers.length; i++) {
            int[] curComputer = computers[i];
            for (int j = 0; j < curComputer.length; j++) {
                if (curComputer[j] == 1 && !visited[j]) {
                   dfs(curComputer);
                    answer++;
                } 
            }
        }
        return answer;
    }
    
    static void dfs(int[] computer) {
        for (int i = 0; i < computer.length; i++) {
            if (computer[i] == 1 && !visited[i]) {
                visited[i] = true;
                dfs(computers[i]);
            }
        } 
    }
}


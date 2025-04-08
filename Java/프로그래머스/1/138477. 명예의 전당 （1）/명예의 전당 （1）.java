import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

class Solution {
    public int[] solution(int k, int[] score) {
        PriorityQueue<Integer> hallOfFame = new PriorityQueue<>();
        List<Integer> dailyLowestScores = new ArrayList<>();

        for (int currentScore : score) {
            if (hallOfFame.size() < k) {
                hallOfFame.offer(currentScore);
            } else if (currentScore > hallOfFame.peek()) {
                hallOfFame.poll();
                hallOfFame.offer(currentScore);
            }
            dailyLowestScores.add(hallOfFame.peek());
        }

        int[] answer = new int[dailyLowestScores.size()];
        for (int i = 0; i < dailyLowestScores.size(); i++) {
            answer[i] = dailyLowestScores.get(i);
        }
        return answer;
    }
}
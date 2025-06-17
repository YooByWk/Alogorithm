import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K_country_id = Integer.parseInt(st.nextToken());

        Country[] countries = new Country[N];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int id = Integer.parseInt(st.nextToken());
            int gold = Integer.parseInt(st.nextToken());
            int silver = Integer.parseInt(st.nextToken());
            int bronze = Integer.parseInt(st.nextToken());

            countries[i] = new Country(id, gold, silver, bronze);
        }

        Country K_medals = null;
        for (Country country : countries) {
            if (country.id == K_country_id) {
                K_medals = country;
                break;
            }
        }

        int rank = 1;
        for (Country country : countries) {
            if (country.id == K_country_id) {
                continue;
            }

            if (country.gold > K_medals.gold) {
                rank++;
            } else if (country.gold == K_medals.gold) {
                if (country.silver > K_medals.silver) {
                    rank++;
                } else if (country.silver == K_medals.silver) {
                    if (country.bronze > K_medals.bronze) {
                        rank++;
                    }
                }
            }
        }

        System.out.println(rank);
        br.close();
    }

    static class Country { 
        int id;
        int gold;
        int silver;
        int bronze;

        public Country(int id, int gold, int silver, int bronze) {
            this.id = id;
            this.gold = gold;
            this.silver = silver;
            this.bronze = bronze;
        }
    }
}
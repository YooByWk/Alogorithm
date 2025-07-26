import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        ZoneId seoulZone = ZoneId.of("Asia/Seoul");

        ZonedDateTime nowInSeoul = ZonedDateTime.now(seoulZone);

        LocalDate todayInSeoul = nowInSeoul.toLocalDate();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        String formattedDate = todayInSeoul.format(formatter);
        System.out.println(formattedDate);
    }
}
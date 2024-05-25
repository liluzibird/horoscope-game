import java.net.HttpURLConnection;
import java.util.Scanner;

public class HoroscopeGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        AstrologyApi astrologyApi = new AstrologyApi();
        URL url = new URL("http://example.com");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        System.out.println("Welcome to the Venusian Constellations Game!");
        System.out.print("Enter your zodiac sign: ");
        String userSign = scanner.nextLine();

        System.out.println("Fetching your horoscope...");
        AztroResponse response = astrologyApi.getHoroscope(userSign);

        if (response != null) {
            System.out.println("Here is your horoscope for today:");
            System.out.println(response.getDescription());
        } else {
            System.out.println("Failed to fetch horoscope. Please try again later.");
        }


    }
}

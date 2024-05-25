import com.github.sameerkumar18.aztro.Aztro;
import com.github.sameerkumar18.aztro.model.AztroResponse;
import com.github.sameerkumar18.aztro.model.ZodiacSign;

public class AstrologyApi {
    private final String API_KEY = "your_api_key_here";

    public AztroResponse getHoroscope(String sign) {
        Aztro aztro = new Aztro.Builder()
                .setSign(ZodiacSign.fromString(sign))
                .setDate("today")
                .build();

        try {
            return aztro.execute();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}

import java.util.Scanner;

public class PB_01_replace {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.print("Enter Your name: ");
        String name = user.next();
        String latter = "Dear <|name|>, Thanks a lot";
        String newLatter = latter.replace("<|name|>", name);
        System.out.println(newLatter);

    }
}

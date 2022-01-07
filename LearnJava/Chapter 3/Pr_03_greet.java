import java.util.Scanner;
public class Pr_03_greet {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.print("Enter Your Name Sir: ");
        String name = user.next();
        String greet = ", Good Moring!";
        String greet1 = "Hello " + name + greet;
        System.out.println(greet1);
    }
}

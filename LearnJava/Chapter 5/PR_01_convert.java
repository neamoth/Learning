import java.util.Scanner;
public class PR_01_convert {
    public static void main(String[] args) {
        // Making Scanner object
        Scanner user = new Scanner(System.in);
        // Taking the string from user
        System.out.println("Enter your Line: ");
        String newString = user.nextLine();
        // Converting uppercase
        String upperCase = newString.toUpperCase();
        System.out.println("String converted into UpperCase: "+upperCase);
    }
}

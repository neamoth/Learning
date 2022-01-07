import java.util.Scanner;

public class PR_02_ReplaceSpace {
    public static void main(String[] args) {
        // Making Scanner object
        Scanner user = new Scanner(System.in);
        // Taking the string from user
        System.out.print("Enter your Line: ");
        String newString = user.nextLine(); 
        // Replaceing space with underscore
        String replaceSpace = newString.replace(" ", "_");
        System.out.println("Replaceing Space:"+replaceSpace);
    }
}

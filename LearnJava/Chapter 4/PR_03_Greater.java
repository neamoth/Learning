import java.util.Scanner;
public class PR_03_Greater {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        int number1, number2;
        number1 = 9;
        System.out.println("Enter a number: ");
        number2 = user.nextInt();
        System.out.println("The number is greater. This statement is,"+(number2>number1));
    }
}

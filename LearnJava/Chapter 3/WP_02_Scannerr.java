import java.util.Scanner;

public class WP_02_Scannerr {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number a: ");
        int a = sc.nextInt();
        System.out.println("Enter a number b: ");
        int b = sc.nextInt();
        int sum = a + b;
        System.out.println("The ans of a+b is," + sum);
        
    }
}

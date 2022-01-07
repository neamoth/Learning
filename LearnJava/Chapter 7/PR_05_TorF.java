import java.util.Scanner;

public class PR_05_TorF {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = user.nextInt();
        int sum = 0;
        for(int i=0; i<=10; i++){
            System.out.printf("%d X %d = %d", n, i, n*i);
            System.out.println();
            sum += n*i;
        }
        System.out.println("The sum is, "+ sum);
    }
}

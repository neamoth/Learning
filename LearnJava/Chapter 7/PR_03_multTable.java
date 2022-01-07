import java.util.Scanner;
public class PR_03_multTable {
    public static void main(String[] args) {
        // Scanner user = new Scanner(System.in);
        // System.out.print("Enter a number: ");
        // int n = user.nextInt();
        // for(int i=1; i<=10; i++){
        //     System.out.printf("%d X %d = %d", n, i, n*i);
        //     System.out.println();
        // }
        Scanner user = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = user.nextInt();
        for(int i=10; i>=1; i--){
            System.out.printf("%d X %d = %d", n, i, n*i);
            System.out.println();
        }
    }
}

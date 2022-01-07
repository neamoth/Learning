import java.util.Scanner;

public class WP_02_Switch {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int a = user.nextInt();

        switch(a){
            case 18:
            System.out.println("You are going to become an adult");
            break;
            case 23:
            System.out.println("You are ready for a job");
            break;
            case 60:
            System.out.println("You are going to retired!");
            break;
            default:
            System.out.println("Enjoy your life. Thank you!");
        }
        System.out.println("Thanks for using java course");
    }
}

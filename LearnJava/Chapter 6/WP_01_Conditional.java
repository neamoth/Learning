import java.util.Scanner;

public class WP_01_Conditional {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.print("Enter choice 1.drink or 2.smoke: ");
        int userchoice = user.nextInt();
        if(userchoice == 1){
            System.out.println("You Started drinking");
        }
        else if(userchoice == 2){
            System.out.println("You are smoking now!");
        }
        else{
            System.out.println("Invalid input!!!");
        }

    }
}
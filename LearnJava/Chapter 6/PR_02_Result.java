import java.util.Scanner;
public class PR_02_Result {
    public static void main(String[] args) {
        float mark1, mark2, mark3, result;
        Scanner user = new Scanner(System.in);
        // System.out.print("Enter Total marks: ");
        // total_Marks= user.nextFloat();
        System.out.print("Enter Mark1: ");
        mark1 = user.nextFloat();
        System.out.print("Enter Mark2: ");
        mark2 = user.nextFloat();
        System.out.print("Enter Mark3: ");
        mark3 = user.nextFloat();
        // total_Subs = 3.0f;
        result = (mark1+mark2+mark3)/3.0f;
        if(result >= 40 && mark1 >= 33 && mark2 >= 33 && mark3 >= 33){
            System.out.println("Passed!");
        }
        else{
            System.out.println("Failed!");
        }

    }
}

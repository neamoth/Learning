import java.util.Scanner;

public class Ex_01_Calculator {
    public static void main(String[] args) {
        float marks1, marks2, marks3, marks4, sumMarks, totalSubs, total, fullMarks;; 
        Scanner user = new Scanner(System.in);
        System.out.println("Input subject full marks(50-100): ");
        fullMarks = user.nextFloat();
        System.out.println("Enter Marks1: ");
        marks1 = user.nextFloat();
        System.out.println("Enter Marks2: ");
        marks2 = user.nextFloat();
        System.out.println("Enter Marks3: ");
        marks3 = user.nextFloat();
        System.out.println("Enter Marks4: ");
        marks4 = user.nextFloat();
        totalSubs = 4;
        sumMarks =(marks1+marks2+marks3+marks4)*fullMarks;
        total = sumMarks/(totalSubs*fullMarks);
        System.out.println("The parcentage of 4 Subject marks are: " + total );
    }
}

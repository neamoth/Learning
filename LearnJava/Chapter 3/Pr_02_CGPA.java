import java.util.Scanner;

public class Pr_02_CGPA {
    public static void main(String[] args) {
        float marks1, marks2, marks3, totalSubs, totalMarks, fullMarks, cGPA;
        //Calling Scanner
        Scanner user = new Scanner(System.in);
        //Taking information
        System.out.println("Enter FullMarks for Subjects(50-100) :");
        fullMarks = user.nextFloat();
        System.out.println("Enter Total Subjects: ");
        totalSubs = user.nextFloat();
        System.out.println("Enter Marks1: ");
        marks1 = user.nextFloat();
        System.out.println("Enter Marks2: ");
        marks2 = user.nextFloat();
        System.out.println("Enter Marks3: ");
        marks3 = user.nextFloat();
        totalMarks = (marks1+marks2+marks3)*fullMarks;
        cGPA = totalMarks/(fullMarks*totalSubs);
        System.out.println("The student cGPA: "+cGPA);
    }
}

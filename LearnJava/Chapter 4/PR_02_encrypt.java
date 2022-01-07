public class PR_02_encrypt {
    public static void main(String[] args) {
        int n;
        char grade;
        grade = 'B';
        n = 8;
        //Encryption the grade
        grade = (char) (grade + n);
        System.out.println(grade);
        // Decryption the grade
        grade = (char) (grade - n);
        System.out.println(grade);
        
    }
}

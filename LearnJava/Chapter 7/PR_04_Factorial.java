public class PR_04_Factorial {
    public static void main(String[] args) {
        int n = 8;
        int i = 1;
        int factorial = 1;
        // while(i<=n){
        //     factorial *=i;
        //     i++;
        // }
        // System.out.println(factorial);
        for(i=1; i<=n; i++){
            factorial *=i;
        }
        System.out.println(factorial);
    }
}

public class PR_01_StartPrinting {
    public static void main(String[] args) {
        int i,j, n=5;
        // for (i=0; i<5; i++){
        //     for (j=0; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        for(i=n; i>0; i--){
            for(j=0; j<i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
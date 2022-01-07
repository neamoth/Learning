public class WP_04_BreakContinue {
    public static void main(String[] args) {
        for(int i=1; i<5; i++){
            System.out.println(i + ". Java is great");
            if(i==3){
                System.out.println("Breaking the loop.");
                break;
            }
        }
    }
}

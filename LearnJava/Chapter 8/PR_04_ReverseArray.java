import javax.naming.spi.ResolveResult;

public class PR_04_ReverseArray {
    public static void main(String[] args) {
        int [] reverser = {34,54,66,77,88};
        int l = reverser.length;
        int n = Math.floorDiv(l, 2);
        int temp;
        for(int i=0; i<n; i++){
            // swap a[i] and a[l-i-1]
            temp = reverser[i]; // calling a temp
            reverser[i] = reverser[l-i-1];
            reverser[l-i-1] = temp;
        }
        for(int element:reverser){
            System.out.print(element+" ");
        }
    }
}

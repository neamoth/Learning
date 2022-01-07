public class PR_01_Arraysum {
    public static void main(String[] args) {
        int []sum = {5,6,8,7,4};
        int sums = 0;
        for(int element:sum){
            sums = sums+element;
        }
        System.out.println(sums);
    }
}

public class PR_02_Finding {
    public static void main(String[] args) {
        int []sum = {5,6,8,7,4};
        int finding = 5;
        boolean isInArray = false;
        for(int element:sum){
            // checking the number
            if(finding == element){
                isInArray = true;
                break;
            }
        }
        // printing the result
        if(isInArray){
            System.out.println("The value is present in the array");
        }
        else{
            System.out.println("The value is not in this array");
        }
    }
}

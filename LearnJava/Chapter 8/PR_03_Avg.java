public class PR_03_Avg {
    public static void main(String[] args) {
        float []marks = {34.5f,54.0f,54.5f,23.0f,55.0f};
        float sum = 0, avg = 0;
        // sum of all marks
        for(float elememt:marks){
            sum = sum+elememt;
        }
        // finding avarage
        avg = sum/5.0f;
        // printing avarage   
        System.out.println("The avarage marks is, "+avg );
    }
}

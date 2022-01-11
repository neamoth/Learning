public class PR_01_Method {
    static int logic(int a, int b){
        int c;
        if(a>b){
            c = a+b;
        }
        else{
            c = (a+b) * 5;
        }
        a = 34; 
        // This is a initial value
        return c;
    }
    public static void main(String[] args) {
     int x = 4;
     int y = 5;
     int z = logic(x, y);
     System.out.println(z);
     int x1 = 5;
     int y1 = 4;
     int z1 = logic(x1, y1);
     System.out.println(z1);
    }
}

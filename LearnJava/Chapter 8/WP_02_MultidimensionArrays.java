public class WP_02_MultidimensionArrays {
    public static void main(String[] args) {
        int [][]marks = new int[2][3];
        marks[0][0] = 100;
        marks[0][1] = 101;
        marks[0][2] = 102;
        marks[1][0] = 200;
        marks[1][1] = 201;
        marks[1][2] = 202;

        for(int i=0; i<marks.length; i++){
            for (int j=0; j<marks[i].length; j++){
                System.out.print(marks[i][j]);
                System.out.print(" ");
            }
        }
        int [][]result = {{2,3},{3,4,5}};
        
    
    }
}

import javax.sound.midi.Synthesizer;

public class WP_01_Arrays{
    public static void main(String[] args) {
        int [] marks = new int [5];
        marks[0] = 100;
        marks[1] = 200;
        marks[2] = 300;
        marks[3] = 400;
        marks[4] = 500;
        marks[3] = 900; // I can change arrays value by accessing this
        // marks[5] = 600; // This will throw an error, because the limit is already reach
        // System.out.println(marks[3]);

        int result[] = {43,56,54,23,43};
        // System.out.println(result.length); // Display the length the array.

        // Displying the length of the array:
        // for(int i = 0; i<result.length; i++){
        //     System.out.println(result[i]);
        // }
        // Using for-each loops
        for (int element: result){
            System.out.println(element);
        }
    }
}
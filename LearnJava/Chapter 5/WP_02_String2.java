public class WP_02_String2 {
    public static void main(String[] args) {
        String name = "Neamoth";
        String lowerCaseValue = name.toLowerCase();
        System.out.println("LowerCase String,"+lowerCaseValue);
        String uperCase = name.toUpperCase();
        System.out.println("String UpperCase,"+uperCase);
        String lineParagraph ="This is a big String      . Thank you!";
        String trimCase = lineParagraph.trim();
        System.out.println("This is String Triming,"+trimCase);
    }
}

public class PR_03_Detect {
    public static void main(String[] args) {
        String newString = "Neamoth  is a good   boy";
        // Detacting Double and Triple Space
        System.out.println("Double Space are,"+newString.indexOf("  "));
        System.out.println("Triple Space are," + newString.indexOf("   "));
    }
}

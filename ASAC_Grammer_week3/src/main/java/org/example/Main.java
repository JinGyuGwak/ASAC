import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=b-45;

        if(c<0){
            if (a==0){
                a=23;
                c+=60;
            }
            else {
                a-=1;
                c+=60;
            }
        }






        System.out.println(a + " " + c);



    }
}
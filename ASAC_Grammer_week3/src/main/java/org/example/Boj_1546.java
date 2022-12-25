package org.example;

import java.util.Scanner;

public class Boj_1546 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a=sc.nextInt();
        int b=0, b1=a;

        int c=0;
        while(true){
            c++;
            if (a<10){ // 0 1 -> 1    -> 11이 됨
                a=(a*10)+a;
            }
            else { // a=26
                b=((a/10)+(a%10)); // b=8
                a=(a%10)*10+(b%10);
            }

            if(a==b1){break;}

        }
        System.out.println(c);
    }
}

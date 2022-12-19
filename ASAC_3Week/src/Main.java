public class Main {
    public static void main(String[] args) {
        // 고객 객체 생성
        Customer a = new DiscountCustomer("이순신","Silver");
        Customer b = new DiscountCustomer("신사임당","Gold");
        Customer c = new DiscountCustomer("홍길동","VIP");
        Customer d = new BonusCustomer("이율곡","Silver");
        Customer e = new BonusCustomer("김유신","Gold");
        Customer f = new BonusCustomer("권율","VIP");
        System.out.println(b);
        System.out.println(f);

        // 고객 리스트 생성, 추가

        // 고객 정보 조회 & 가격 계산


    }
}
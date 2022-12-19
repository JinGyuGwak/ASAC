public class BonusCustomer extends Customer{
    private int point=0; //포인트
    private double accumulation; // 적립률

    @Override
    public int payments(int price) {
        point=(int)(price*accumulation);
        return price;
    }

    public BonusCustomer(String name, String grade) {
        super(name, grade);
        switch (grade){
            case "Silver" : this.accumulation = 0.1; break;
            case "Gold"   : this.accumulation = 0.2; break;
            case "VIP"    : this.accumulation = 0.3; break;
            default: this.accumulation = 0;
                break;
        }

    }
    public double getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public double getAccumulation() {
        return accumulation;
    }

    public void setAccumulation(double accumulation) {
        this.accumulation = accumulation;
    }

    @Override
    public String toString() {
        return "[" + super.getGrade() + "] 안녕하세요. "
                + super.getName() + " 회원님. 회원님의 적립률은 " +
                accumulation + "입니다.\n" +
                "보너스 포인트" + point + "가 적립되었습니다. " +
      //          "현재 보너스 포인트 " + point +
                "\n지불할 금액:" + payments(10000);
    }
}

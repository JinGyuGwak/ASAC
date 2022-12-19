public class DiscountCustomer extends Customer{
    private double rate; //할인율

    @Override
    public int payments(int price) {
        return (int) (price * (1-this.rate));
    }

    public DiscountCustomer(String name, String grade) {
        super(name, grade);
        switch (grade){
            case "Silver" : this.rate = 0.1; break;
            case "Gold"  : this.rate = 0.2; break;
            case "VIP"    : this.rate = 0.3; break;
            default: this.rate = 0;
                break;
        }
    }

    public double getRate() {
        return rate;
    }
    public void setRate(double rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "[" + super.getGrade() + "] 안녕하세요. "
                + super.getName() + " 회원님. 회원님의 할인율은 " +
                rate + "입니다.\n" +
                "지불할 금액 :" + payments(10000);
    }
}

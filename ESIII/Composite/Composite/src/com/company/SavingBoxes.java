package com.company;

public class SavingBoxes implements Account {
    //caixinhas

    private String boxname;
    private double balance;

    public SavingBoxes(String boxname, double balance) {
        this.boxname = boxname;
        this.balance = balance;
    }

    @Override
    public void showAccountDetails() {
        System.out.println(boxname + " - " + balance);
    }
}

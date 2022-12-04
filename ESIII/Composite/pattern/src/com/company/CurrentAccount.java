package com.company;

public class CurrentAccount implements Account {

    private double balance;

    public CurrentAccount(double balance) {
        this.balance = balance;
    }

    @Override
    public void showAccountDetails() {
        System.out.println("Saldo conta corrente: " + balance);
    }
}

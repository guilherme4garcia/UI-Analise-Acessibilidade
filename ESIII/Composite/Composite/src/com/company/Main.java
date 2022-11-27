package com.company;

public class Main {

    public static void main(String[] args) {
        SavingBoxes ferias = new SavingBoxes("Ferias", 1300.00);
        SavingBoxes carro = new SavingBoxes("Carro Novo", 750.00);
        SavingBoxes reforma = new SavingBoxes("Reforma", 5000.00);

        CompositeBankService SavingBoxes = new CompositeBankService();
        SavingBoxes.addAccount(ferias);
        SavingBoxes.addAccount(carro);
        SavingBoxes.addAccount(reforma);

        CurrentAccount corrente = new CurrentAccount(2350.00);

        CompositeBankService currentBankAccount = new CompositeBankService();
        currentBankAccount.addAccount(corrente);

        CompositeBankService allBankAccount = new CompositeBankService();
        allBankAccount.addAccount(SavingBoxes);
        allBankAccount.addAccount(currentBankAccount);
        allBankAccount.showAccountDetails();
        System.out.println("--");

    }

}
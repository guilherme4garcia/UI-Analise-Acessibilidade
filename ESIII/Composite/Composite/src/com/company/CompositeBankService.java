package com.company;

import java.util.List;
import java.util.ArrayList;

public class CompositeBankService implements Account {

    //Composite

    private List<Account> accountList = new ArrayList<Account>();

    @Override
    public void showAccountDetails() {
        //iterar pelas contas
        for (Account account : accountList) {
            account.showAccountDetails();
        }
    }

    public void addAccount(Account account) {
        accountList.add(account);
    }
    public void removeAccount(Account account) {
        accountList.remove(account);
    }
};
package com.company;

import com.company.framework.*;

public class BuyCryptoFacade {

    // Facade que ira gerenciar sub-classes:

    public void buyCryptocurrency(double amount, String currency) {

        DatabaseService dbService = new DatabaseService();
        User user = dbService.getUser(UIService.getLoggedInUserId());
        if (user.balance() < amount) {
            System.out.println("Saldo insuficiente para completar a transação");
            return;
        }
        CryptoFactory.getCryptoService(currency).buyCurrency(user, amount);
        MailService mailService = new MailService();
        mailService.sendConfirmationMail(user);
        System.out.println(amount + " de " + currency + " comprado com sucesso!");

    }

}


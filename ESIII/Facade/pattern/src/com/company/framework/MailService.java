package com.company.framework;

public class MailService {

    public void sendConfirmationMail(User user) {
        System.out.println("Enviando email para " + user.name());
    }

}

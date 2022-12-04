package com.company;

public class EmailMsgListener {
    private final String email;
    public  EmailMsgListener(String email) {
        this.email = email;
    }

    public void update() {
        // Send the email
        System.out.println("Enviando email para: " + email);
    }
}

package com.company.framework;

public class BitcoinService extends CryptoService {

    @Override
    public void buyCurrency(User user, double amount) {
        System.out.println("Comprando " + amount + " de Bitcoin...");
    }

}


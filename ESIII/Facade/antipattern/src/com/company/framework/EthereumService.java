package com.company.framework;

public class EthereumService extends CryptoService {

    @Override
    public void buyCurrency(User user, double amount) {
        System.out.println("Comprando " + amount + " de Ethereum...");
    }

}


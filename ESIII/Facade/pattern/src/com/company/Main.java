package com.company;

public class Main {

    public static void main(String[] args) {

        BuyCryptoFacade buyCrypto = new BuyCryptoFacade();
        buyCrypto.buyCryptocurrency(1000, "BTC");
        buyCrypto.buyCryptocurrency(500, "ETH");
        buyCrypto.buyCryptocurrency(3000,"BTC");

    }

}

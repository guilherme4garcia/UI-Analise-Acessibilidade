package com.company;

import com.company.framework.*;

public class Main {

    public static void main(String[] args) throws Exception{

        DatabaseService dbService = new DatabaseService();
        User user = dbService.getUser((UIService.getLoggedInUserId()));
        CryptoFactory.getCryptoService("BTC").buyCurrency(user, 1000);

    }

}

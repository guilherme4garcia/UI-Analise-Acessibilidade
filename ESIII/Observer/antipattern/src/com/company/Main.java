package com.company;



public class Main {
    public static void main(String[] args) {

        Store store = new Store();
        store.getService().subscribe(new EmailMsgListener("guilherme@gmail.com"));
        store.getService().subscribe(new EmailMsgListener("joao@outlook.com"));
        store.getService().subscribe(new EmailMsgListener("pedro@yahoo.com"));


        store.newItemPromotion();





        System.out.println("==========================================");

        // removendo Pedro da lista de Promoçõees
        store.getService().unsubscribe(new EmailMsgListener("pedro@yahoo.com"));

    }
}
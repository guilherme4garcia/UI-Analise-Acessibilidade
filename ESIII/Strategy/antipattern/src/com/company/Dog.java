package com.company;

public class Dog extends Animal{

    public void cavar(){

        System.out.println("Cavar buraco");

    }

    public Dog(){

        super();

        setSound("Latido");




    }

    public void fly() {
        System.out.println("Não consigo voar");
    }


}
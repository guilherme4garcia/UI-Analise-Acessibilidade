package com.company;

public class Dog extends Animal{

    public void cavar(){

        System.out.println("Cavar buraco");

    }

    public Dog(){

        super();

        setSound("Latido");


        // flyngType setada para o animal não poder voar

        flyingType = new CantFly();

    }


}
package com.company;

public class Bird extends Animal{

    // O constructor inicializa todos os objetos

    public Bird(){

        super();

        setSound("Piando");


        flyingType = new ItFlys();

    }

}
package com.company;


public interface Flys {

    String fly();

}

// Classe utilizada se o animal pode voar

class ItFlys implements Flys{

    public String fly() {

        return "Voando Alto";

    }

}

//Classe utilizada se o animal não pode voar

class CantFly implements Flys{

    public String fly() {

        return "Não consigo voar";

    }

}
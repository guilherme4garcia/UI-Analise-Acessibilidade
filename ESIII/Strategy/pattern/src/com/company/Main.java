package com.company;

public class Main{

    public static void main(String[] args){

        Animal bob = new Dog();
        Animal canario = new Bird();

        System.out.println("Cachorro: " + bob.tryToFly());

        System.out.println("Pássaro: " + canario.tryToFly());

        // Isso permite mudanças dinamicas de flyingType

        bob.setFlyingAbility(new ItFlys());

        System.out.println("Cachorro: " + bob.tryToFly());

    }

}
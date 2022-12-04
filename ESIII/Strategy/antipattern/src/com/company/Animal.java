package com.company;

public class Animal {

    private String name;

    private String sound;


    public void setName(String newName){ name = newName; }
    public String getName(){ return name; }

    public void setSound(String newSound){ sound = newSound; }
    public String getSound(){ return sound; }

    public void fly () {
        System.out.println("Estou voando");
    }



}
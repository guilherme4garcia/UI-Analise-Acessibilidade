package com.company;

public class Animal {

    private String name;

    private String sound;

    public Flys flyingType;

    public void setName(String newName){ name = newName; }
    public String getName(){ return name; }

    public void setSound(String newSound){ sound = newSound; }
    public String getSound(){ return sound; }



    public String tryToFly(){

        return flyingType.fly();

    }


    public void setFlyingAbility(Flys newFlyType){

        flyingType = newFlyType;

    }

}
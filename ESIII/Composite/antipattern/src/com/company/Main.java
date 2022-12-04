package com.company;


import java.util.Arrays;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        Box box = new Box(
                Arrays.asList(
                        new Box(
                                Collections.emptyList(),
                                Arrays.asList(
                                        new Product("1", 100),
                                        new Product("2", 100),
                                        new Product("3", 100)
                                )
                        ),
                        new Box(
                                Collections.emptyList(),
                                Arrays.asList(
                                        new Product("4", 200),
                                        new Product("5", 200),
                                        new Product("6", 200)
                                )
                        )
                ),

                Arrays.asList(
                        new Product("7", 100),
                        new Product("8", 100)
                )
        );
        System.out.println(box.calculatePrice());
    }
}

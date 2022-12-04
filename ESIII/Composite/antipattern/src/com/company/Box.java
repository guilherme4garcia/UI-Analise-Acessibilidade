package com.company;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Box {

    private List<Box> boxes;
    private List<Product> products;

    public double calculatePrice() {

        // recursão

        double sum = products.stream()
                .mapToDouble(Product::getPrice).sum();

        for (Box box : boxes) {
            sum = sum + box.calculatePrice();
        }

        return sum;
    }
}

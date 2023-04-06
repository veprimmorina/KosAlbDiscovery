package com.example.demo.Core.Entities;


import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String name;
    @Column
    private String description;
    @Column
    private int quantity;
    @Column
    private int amount;
    @Column
    private double price;
    @Column
    private String photoPath;
    @Column
    private String category;

    public Product(String name, String description, int quantity, int amount, double price, String photoPath, String category){
        this.name=name;
        this.description=description;
        this.quantity=quantity;
        this.amount=amount;
        this.price=price;
        this.photoPath=photoPath;
        this.category=category;
    }

    public  Product(){}

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public double getPrice() {
        return price;
    }

    public int getAmount() {
        return amount;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setDescription(String description) {

        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

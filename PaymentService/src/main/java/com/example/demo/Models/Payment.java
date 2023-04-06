package com.example.demo.Models;

import javax.persistence.*;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;
    @Column
    private double amount;
    @Column
    private String hotel;
    @Column
    private String roomType;


    public Payment(double amount, String hotel, String roomType) {
        this.amount = amount;
        this.hotel = hotel;
        this.roomType = roomType;

    }

    public Payment() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }


}

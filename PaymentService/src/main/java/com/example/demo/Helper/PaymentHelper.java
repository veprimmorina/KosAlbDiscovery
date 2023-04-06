package com.example.demo.Helper;

import java.io.Serializable;

public class PaymentHelper implements Serializable {
    private double amount;
    private String hotel;
    private String roomType;



    public PaymentHelper(double amount, String hotel, String roomType) {
        this.amount = amount;
        this.hotel = hotel;
        this.roomType = roomType;

    }

    public double getAmount() {
        return amount;
    }

    public String getHotel() {
        return hotel;
    }

    public String getRoomType() {
        return roomType;
    }


}

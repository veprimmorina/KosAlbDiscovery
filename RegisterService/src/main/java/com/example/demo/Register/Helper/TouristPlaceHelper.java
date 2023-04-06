package com.example.demo.Register.Helper;

import com.example.demo.Register.Models.City;

import java.io.Serializable;

public class TouristPlaceHelper implements Serializable {
    private String name;
    private String city;

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


}

package com.example.demo.Core.Entities;

import javax.persistence.Embeddable;

@Embeddable
public class City {
    private String cityName;

    public City(String cityName) {
        this.cityName = cityName;
    }

    public City() {
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }


}

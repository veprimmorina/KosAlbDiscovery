package com.example.demo.Core.Entities;

import javax.persistence.Embeddable;

@Embeddable
public class TouristPlace {

    private String touristPlaceName;

    public TouristPlace(String touristPlaceName) {
        this.touristPlaceName = touristPlaceName;
    }

    public TouristPlace() {
    }

    public String getTouristPlaceName() {
        return touristPlaceName;
    }

    public void setTouristPlaceName(String touristPlaceName) {
        this.touristPlaceName = touristPlaceName;
    }
}

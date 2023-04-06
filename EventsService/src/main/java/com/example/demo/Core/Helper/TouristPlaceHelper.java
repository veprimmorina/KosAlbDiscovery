package com.example.demo.Core.Helper;

import java.io.Serializable;
import java.util.List;

public class TouristPlaceHelper implements Serializable {
    private List<String> touristPlacesNames;

    public TouristPlaceHelper(List<String> touristPlacesNames) {
        this.touristPlacesNames = touristPlacesNames;
    }

    public TouristPlaceHelper() {
    }

    public List<String> getTouristPlacesNames() {
        return touristPlacesNames;
    }
}

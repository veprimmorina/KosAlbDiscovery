package com.example.demo.Core.Helper;

import com.example.demo.Core.Entities.City;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class CityHelper implements Serializable {
      private Map<Integer,String> citiesNamesAndIds;

    public CityHelper(Map<Integer, String> citiesNamesAndIds) {
        this.citiesNamesAndIds = citiesNamesAndIds;
    }

    public CityHelper() {
    }

    public Map<Integer, String> getCitiesNamesAndIds() {
        return citiesNamesAndIds;
    }
}

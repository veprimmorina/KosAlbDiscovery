package com.example.demo.Register.Service;

import com.example.demo.Register.Models.City;

import java.util.List;
import java.util.Map;

public interface ICityService {

    void createCity(String name, String zipCode);
    void deleteCity(int id);
    City getCityByName(String name);
    City getCity(int id);
    List<City> getAllCities();
    List<String> getAllCitiesNames();
    List<Integer> getAllCitiesIds();
    Map<Integer,String> getCitiesNamesAndIds();

}

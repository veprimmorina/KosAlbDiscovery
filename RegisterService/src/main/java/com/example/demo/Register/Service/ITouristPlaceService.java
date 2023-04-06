package com.example.demo.Register.Service;

import com.example.demo.Register.Models.TouristPlace;

import java.util.List;

public interface ITouristPlaceService {

    void createTouristPlace(String name, String cityName);
    void deleteTouristPlace(int id);
    TouristPlace getToruistPlace(int id);
    TouristPlace getTouristPlaceByName(String name);
    List<TouristPlace> getAllTouristPlaces();
    List<TouristPlace> getAllTouristPlacesByCityName(String cityName);
    List<String> getAllTouristPlacesNames();
}

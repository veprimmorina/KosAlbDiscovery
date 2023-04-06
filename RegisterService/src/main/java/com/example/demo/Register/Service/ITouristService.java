package com.example.demo.Register.Service;


import com.example.demo.Register.Models.Tourist;

import java.util.List;

public interface ITouristService {
    Tourist getTourist(int id);

    Tourist getTouristByUsernameAndPassword(String username, String password);

    Tourist getTouristByUsername(String username);

    List<Tourist> getAllTourists();

    void createTourist(String fullName, int age, char gender, String Email, String password, String username, String role,String status);

    void deleteTourist(int id);

    long getTouristsNumber();

}

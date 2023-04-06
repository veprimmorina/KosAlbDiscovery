package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Business;

import java.util.List;

public interface IBusinessService {
    Business getBusiness(int id);

    Business getBusinessByUsernameAndPassword(String username, String password);
    Business getBusinessByUsername(String username);

    List<Business> getAllBusinesses();

    void createBusiness(String name, String email, String password, String username, String tel_Number, String owner_ID, String fiscal_Number, String business_Number, String business_Activity, String cityName, String status, String role);

    void deleteBusiness(int id);

    void editBusiness(int id, String businessActivity, String businessNumber, String email, String fiscalNumber, String name, String ownerId, String password, String telNumber, String username, String status, String role);

    void editBusinessStatus(int id, String status);

    long getBusinessesNumber();

}

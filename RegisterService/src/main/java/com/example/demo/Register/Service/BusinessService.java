package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Business;
import com.example.demo.Register.Models.City;
import com.example.demo.Register.Repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusinessService implements IBusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private CityService cityService;

    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }


    @Override
    public Business getBusiness(int id) {
        Optional<Business> businessObtional = this.businessRepository.findById(id);
        return businessObtional.get();
    }

    @Override
    public Business getBusinessByUsernameAndPassword(String username, String password) {
        Optional<Business> businessOptional = this.businessRepository.findBusinessByUsernameAndPassword(username, password);
        return businessOptional.get();
    }

    @Override
    public Business getBusinessByUsername(String username) {
        Optional<Business> optionalBusiness= this.businessRepository.findBusinessByUsername(username);

            return optionalBusiness.get();



    }

    @Override
    public List<Business> getAllBusinesses() {
        return this.businessRepository.findAll();
    }

    @Override
    public void createBusiness(String name, String email, String password, String username, String tel_Number, String owner_ID, String fiscal_Number, String business_Number, String business_Activity, String cityName, String status, String role) {
        City city = this.cityService.getCityByName(cityName);
        Business business = new Business(name, email, password, username, tel_Number, owner_ID, fiscal_Number, business_Number, business_Activity, city ,status, role);
        this.businessRepository.save(business);
    }


    @Override
    public void deleteBusiness(int id) {
        this.businessRepository.deleteById(id);

    }

    @Override
    public void editBusiness(int id, String businessActivity, String businessNumber, String email, String fiscalNumber, String name, String ownerId, String password, String telNumber, String username, String role, String status) {
        this.businessRepository.updateBusiness(id, businessActivity, businessNumber, email, fiscalNumber, name, ownerId, password, telNumber, username, status, role);
    }


    @Override
    public void editBusinessStatus(int id, String status) {
        Optional<Business> businessOptional = this.businessRepository.findById(id);
        businessOptional.get().setStatus(status);
    }

    @Override
    public long getBusinessesNumber() {
        return this.businessRepository.count();
    }


}

package com.example.demo.Register.Controller;

import com.example.demo.Register.Helper.BusinessHelper;
import com.example.demo.Register.Helper.LoginHelper;
import com.example.demo.Register.Helper.StatusHelper;
import com.example.demo.Register.Models.Business;
import com.example.demo.Register.Service.IBusinessService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/register/business")
public class BusinessController {
    private IBusinessService interfaceBusinessService;


    public BusinessController(IBusinessService interfaceBusinessService) {
        this.interfaceBusinessService = interfaceBusinessService;
    }


    @PostMapping("/create/business")
    public void registerBusiness(@RequestBody BusinessHelper businessHelper) {
        this.interfaceBusinessService.createBusiness(businessHelper.getName(), businessHelper.getEmail(), businessHelper.getPassword(), businessHelper.getUsername(), businessHelper.getTel_Number(), businessHelper.getOwner_ID(), businessHelper.getFiscal_Number(), businessHelper.getBusiness_Number(), businessHelper.getBusiness_Activity(), businessHelper.getCityName(),businessHelper.getStatus(), businessHelper.getRole());

    }

    @GetMapping("/get/business/{id}")
    public Business getBusiness(@PathVariable("id") int id) {
        return this.interfaceBusinessService.getBusiness(id);

    }

    @GetMapping("/get/business")
    public Business getBusiness(@RequestBody LoginHelper loginHelper) {
        String username = loginHelper.getUsername();
        String password = loginHelper.getPassword();

        return this.interfaceBusinessService.getBusinessByUsernameAndPassword(username, password);
    }

    @GetMapping("/get/businesses/number")
    public long getBusinessesNumber() {
        return this.interfaceBusinessService.getBusinessesNumber();
    }



    @GetMapping("/get/all/businesses")
    public List<Business> getAllBusinesess() {
        return this.interfaceBusinessService.getAllBusinesses();
    }

    @PostMapping("/delete/business/by/{id}")
    public void deleteBusiness(@PathVariable("id") int id) {

        this.interfaceBusinessService.deleteBusiness(id);
    }

    @PostMapping("/edit/business/status")
    public void blockBusiness(@RequestBody StatusHelper statusHelper) {
        this.interfaceBusinessService.editBusinessStatus(statusHelper.getUserId(), statusHelper.getStatus());

    }

    @PostMapping("/edit/business")
    public void editBusiness(@RequestBody BusinessHelper businessHelper) {
        this.interfaceBusinessService.editBusiness(businessHelper.getId(), businessHelper.getBusiness_Activity(), businessHelper.getBusiness_Number(), businessHelper.getEmail(), businessHelper.getFiscal_Number(), businessHelper.getName(), businessHelper.getOwner_ID(), businessHelper.getPassword(), businessHelper.getTel_Number(), businessHelper.getUsername(), businessHelper.getStatus(), businessHelper.getRole());
    }

    @GetMapping("/get/business/byUsername/{username}")
    public Business getBusinessByUsername(@PathVariable("username") String username){
        return this.interfaceBusinessService.getBusinessByUsername(username);
    }
}

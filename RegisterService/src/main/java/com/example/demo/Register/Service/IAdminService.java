package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Admin;

import java.util.List;

public interface IAdminService {
    Admin getAdmin(int id);

    Admin getAdminByUsernameAndPassword(String username, String password);

    Admin getAdminByUsername(String username);

    List<Admin> getAllAdmin();

    List<Admin> getAllAdmins();

    void createAdmin(String name, String email, String surname, String username, String password, char gender);

    void deleteAdmin(int id);

    void editAdmin(int id, String adminID, String name, String surname, int age, String username, String gender, String email, String password, String role);

    Admin register(String name, String surname, String username, String password);
    //Admin register(String name,String surname,String username,String password);
}

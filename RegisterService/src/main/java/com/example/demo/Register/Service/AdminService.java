package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Admin;
import com.example.demo.Register.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService implements IAdminService {

    @Autowired
    private AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public Admin getAdmin(int id) {
        Optional<Admin> adminOptional = this.adminRepository.findById(id);
        return adminOptional.get();
    }

    @Override
    public Admin getAdminByUsernameAndPassword(String username, String password) {
        Optional<Admin> adminOptional = this.adminRepository.findAdminByUsernameAndPassword(username, password);
        return adminOptional.get();
    }

    @Override
    public Admin getAdminByUsername(String username) {
        Optional<Admin> optionalAdmin = this.adminRepository.findAdminByUsername(username);
        return optionalAdmin.get();
    }

    @Override
    public List<Admin> getAllAdmin() {
        return this.adminRepository.findAll();
    }

    @Override
    public List<Admin> getAllAdmins() {
        return this.adminRepository.findAll();
    }

    @Override
    public void createAdmin(String name, String email, String surname, String username, String password, char gender) {
        Admin admin = new Admin(name, email, surname, username, password, gender);
        this.adminRepository.save(admin);
    }

    @Override
    public void deleteAdmin(int id) {
        this.adminRepository.deleteById(id);
    }

    @Override
    public void editAdmin(int id, String adminID, String name, String surname, int age, String username, String gender, String email, String password, String role) {

    }

    @Override
    public Admin register(String name, String surname, String username, String password) {
        return null;
    }

//    @Override
//    public Admin register(String name, String surname, String username, String password) {
//        return null;
//    }
}

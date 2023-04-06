package com.example.demo.Infrastructure.Helper;

import java.io.Serializable;

public class UserRabbitmqHelper implements Serializable {

    private String email;

    public UserRabbitmqHelper(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}


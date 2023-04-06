package com.example.demo.Core.Helper;

import java.io.Serializable;

public class UserHelper implements Serializable {
    private String name;
  //  private String surname;
    private String username;
    private String email;


    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}

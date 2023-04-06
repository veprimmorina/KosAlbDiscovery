package com.example.demo.Core.Entities;

import javax.persistence.Embeddable;


@Embeddable
public class User {
 private String userFullName;

    public User(String userFullName) {
        this.userFullName = userFullName;
    }

    public User() {
    }

    public String getUserFullName() {
        return userFullName;
    }

    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }
}

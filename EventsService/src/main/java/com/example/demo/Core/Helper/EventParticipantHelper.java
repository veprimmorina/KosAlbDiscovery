package com.example.demo.Core.Helper;

import java.io.Serializable;

public class EventParticipantHelper implements Serializable {

    private int id;
    private String username;
/*
    public EventParticipantHelper(int id, String username) {
        this.id = id;
        this.username = username;
    }
*/
    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

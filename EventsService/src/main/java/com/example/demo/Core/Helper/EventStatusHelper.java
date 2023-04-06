package com.example.demo.Core.Helper;

import java.io.Serializable;

public class EventStatusHelper implements Serializable {

    private String status;

    public EventStatusHelper(String status){
        this.status=status;
    }

    public EventStatusHelper(){

    }

    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status=status;
    }


}

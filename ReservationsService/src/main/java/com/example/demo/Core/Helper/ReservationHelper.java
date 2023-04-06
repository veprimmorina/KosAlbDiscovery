package com.example.demo.Core.Helper;

import com.example.demo.Core.Entities.Business;
import com.example.demo.Core.Entities.Room;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

public class ReservationHelper implements Serializable {
    private Time time;
    private Date date;
    private Date checkInDate;
    private Date checkOutDate;
    private String businessUsername;
    private String touristUsername;
    private String roomType;

  /*  public ReservationHelper(Time time, Date date, Date checkInDate, Date checkOutDate, String businessUsername, String touristUsername, String roomType) {
        this.time = time;
        this.date = date;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.businessUsername = businessUsername;
        this.touristUsername = touristUsername;
        this.roomType=roomType;
    }*/

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getBusinessUsername() {
        return businessUsername;
    }

    public void setBusinessUsername(String businessUsername) {
        this.businessUsername = businessUsername;
    }

    public String getTouristUsername() {
        return touristUsername;
    }

    public void setTouristUsername(String touristUsername) {
        this.touristUsername = touristUsername;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
}

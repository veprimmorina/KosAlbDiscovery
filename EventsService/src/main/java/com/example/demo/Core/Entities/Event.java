package com.example.demo.Core.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private Date startDate;
    @Column
    private Date endDate;
    @Column
    private Time startTime;
    @Column
    private String status;
    @Column
    private String photoPath;
    @Embedded
    private User user;
    @Embedded
    private City city;
    @Embedded
    private TouristPlace touristPlace;

    public Event(String name, String description,Date startDate, Date endDate, Time startTime,String status,String photoPath,User user, City city, TouristPlace touristPlace){
        this.name=name;
        this.description=description;
        this.startDate=startDate;
        this.endDate=endDate;
        this.startTime=startTime;
        this.status=status;
        this.photoPath=photoPath;

    }
    public Event(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }



    public City getCity() {
        return city;
    }
    public TouristPlace getTouristPlace() {
        return touristPlace;
    }


    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }
}

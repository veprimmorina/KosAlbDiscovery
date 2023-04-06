package com.example.demo.Core.Entities;


import javax.persistence.*;

@Entity
public class EventParticipants {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String name;

    @Column
    private String username;

    @Column
    private String email;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Event event;

    public EventParticipants(String name,String username,String email, Event event){
        this.name=name;
        this.username=username;
        this.email=email;
        this.event=event;
    }

    public EventParticipants(){

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public Event getEvent() {
        return event;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String surname) {
        this.username = surname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}

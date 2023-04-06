package com.example.demo.Application.InputPort;

import com.example.demo.Core.Entities.Event;
import com.example.demo.Core.Entities.EventParticipants;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;


public interface EventInputport {

    void createEvent(String name, String description, Date startDate, Date endDate, Time startTime,String photoPath ,String cityName, String touristPlaceName, String username);
    void deleteEventById(int id);
    Event getEventById(int id);
    List<Event> getAllEvents();
    List<Event> getEventStatus(String status);
    List<Event> getHappeningEvents();
    List<Event> getFinishedEvents();
    List<Event> getFutureEvents();
    void createEventParticipant(String username, int eventId);
    int getAllEventsNumber();
    List<EventParticipants> getAllEventsParticipants();



}

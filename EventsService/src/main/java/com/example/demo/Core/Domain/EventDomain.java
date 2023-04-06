package com.example.demo.Core.Domain;

import com.example.demo.Core.Entities.City;
import com.example.demo.Core.Entities.Event;
import com.example.demo.Core.Entities.TouristPlace;
import com.example.demo.Core.Entities.User;
import com.example.demo.Core.OutputPort.EventRepository;
import com.example.demo.Core.OutputPort.NotificationOutputPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Component
public class EventDomain {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private NotificationOutputPort notificationOutputPort;

    public EventDomain(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public void createEvent(String name, String description, Date startDate, Date endDate, Time startTime,String photoPath ,User user, City city, TouristPlace touristPlace){

       String status = setEventStatus(startDate,endDate);

       Event event = new Event(name,description,startDate,endDate,startTime,status,photoPath,user,city,touristPlace);

       this.eventRepository.save(event);
    }

    // check start and end date to figure the event status

    public String setEventStatus(Date startDate,Date endDate){
        Date currentDate = new Date(System.currentTimeMillis());

        if(endDate.before(currentDate)){
            return "finished";
        }else if(startDate.after(currentDate)){
            return "future";
        }else{
            return "happening";
        }

    }

    @Scheduled(fixedRate = 1000*60*60*24)
    public void updateEventStatus(){
        List<Event> eventList = this.eventRepository.findAll();
        LocalDate localDate = LocalDate.now(ZoneId.of("GMT+02:30"));
        Date currentDate = Date.valueOf(localDate);

        System.out.println("current Date: "+currentDate);
        for(Event event : eventList){
            System.out.println("startDate"+event.getStartDate());
            System.out.println("EndDate"+event.getEndDate());
            if(event.getEndDate().before(currentDate)){
                this.eventRepository.updateEventStatus(event.getId(),"finished");

            }
            if(event.getStartDate().after(currentDate)){
                this.eventRepository.updateEventStatus(event.getId(),"future");
            }
            if(event.getStartDate() == currentDate || event.getEndDate() == currentDate){
                this.eventRepository.updateEventStatus(event.getId(),"happening");
            }

        }

    }



    public void sendEmail(String email){
      this.notificationOutputPort.sendEmail(email);
    }
}

package com.example.demo.Application.InputAdapter;
import com.example.demo.Application.InputPort.EventInputport;
import com.example.demo.Core.Entities.Event;
import com.example.demo.Core.Entities.EventParticipants;
import com.example.demo.Core.Helper.EventHelper;
import com.example.demo.Core.Helper.EventParticipantHelper;
import com.example.demo.Core.Helper.EventStatusHelper;
import com.example.demo.Core.Helper.UserHelper;
import com.example.demo.Core.OutputPort.UserOutputPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/event")
public class EventController {

    @Autowired
    private EventInputport eventInputport;

    @Autowired
    private UserOutputPort userOutputPort;

   public EventController(EventInputport eventInputport) {
        this.eventInputport = eventInputport;

    }

    @PostMapping("/create")
    public void createEvent(@RequestBody EventHelper eventHelper){
       this.eventInputport.createEvent(eventHelper.getName(),eventHelper.getDescription(),eventHelper.getStartDate(),eventHelper.getEndDate(),eventHelper.getStartTime(),eventHelper.getPhotoPath(),eventHelper.getCityName(),eventHelper.getTouristPlaceName(),eventHelper.getUsername());
    }
    @GetMapping("/get/all/events")
    public List<Event> getAllEvents(){
        return this.eventInputport.getAllEvents();
    }

    @GetMapping("/get/all/events/participants")
    public List<EventParticipants> getAllEventsParticipants(){
        return this.eventInputport.getAllEventsParticipants();
    }

    @GetMapping("/get/events/status")
    public List<Event> getEventStatus(@RequestBody EventStatusHelper eventStatusHelper){
       return this.eventInputport.getEventStatus(eventStatusHelper.getStatus());
    }

    @GetMapping("/get/event/creator/{username}")
    public String getEventCreator(@PathVariable("username") String username){

       return this.userOutputPort.getUserFullNameByUsername(username);
    }

    @GetMapping("/get/happening/events")
    public List<Event> getHappeningEvents(){
       return this.eventInputport.getHappeningEvents();
    }

    @GetMapping("/get/finished/events")
    public List<Event> getFinishedEvents(){
        return this.eventInputport.getFinishedEvents();
    }

    @GetMapping("/get/future/events")
    public List<Event> getFutureEvents(){
        return this.eventInputport.getFutureEvents();
    }

    @PostMapping("/create/eventparticipant")
    public void createEventParticipants(@RequestBody EventParticipantHelper eventParticipantHelper){
       this.eventInputport.createEventParticipant(eventParticipantHelper.getUsername(),eventParticipantHelper.getId());
    }

    @GetMapping("/get/events/number")
    public int getEventsNumber(){
       return this.eventInputport.getAllEventsNumber();
    }

    @GetMapping("/get/user/by/username/{username}")
    public UserHelper getUser(@PathVariable("username") String username){
        return this.userOutputPort.getUserByUsername(username);
    }

    @GetMapping("/delete/by/{id}")
    public void deleteById(@PathVariable("id") int id){
        this.eventInputport.deleteEventById(id);
    }
}

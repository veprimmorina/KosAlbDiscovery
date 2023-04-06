package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Entities.EventParticipants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventParticipantRepository extends JpaRepository <EventParticipants,Integer> {

}

package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import javax.transaction.Transactional;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

    @Modifying
    @Transactional

    @Query(value = "select * from event where status=:status order by start_date desc ", nativeQuery = true)
    public List<Event> findByStatus(@Param("status") String status);

    //order by startDate desc
    @Modifying
    @Transactional
    @Query(value = "update event  set status=?2 where id=?1", nativeQuery = true)
    public void updateEventStatus(int id,String status);


}

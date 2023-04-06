package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

import java.sql.Date;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Integer> {

  //  @Modifying
   // @Transactional
    @Query(value = "select * from reservation where business_username=?1", nativeQuery = true)
    public List<Reservation> findReservationsByBusinessUsername(String username);

    @Query(value = "select * from reservation where room_type=?1 and business_username=?2", nativeQuery = true)
    public List<Reservation> findReservationsByRoomType(String roomType,String businessUsername);

    @Query(value = "select * from reservation where room_number=?1 and business_username=?2 and check_out_date>?3", nativeQuery = true)
    public List<Reservation> findReservationByRoomNumber(int roomNumber,String businessUsername, Date currentDate);

    //@Query(value = "select * from reservation where room_number=?1 and business_username=?2 and check_out_date>?3 and check_out_date<?4 and check_in_date>?5", nativeQuery = true)
    //public Reservation findReservationByRoomNumber4(int roomNumber,String businessUsername, Date newcheckindate,Date newcheckoutdate, Date currentDate);

    //@Query(value = "select * from reservation where room_number=?1 and business_username=?2  and check_in_date<?3 and check_out_date>?4 and check_in_date>?5", nativeQuery = true)
   // public Reservation findReservationByRoomNumber3(int roomNumber,String businessUsername, Date newcheckindate,Date newcheckoutdate, Date currentDate);

    //@Query(value = "select * from reservation where room_number=?1 and business_username=?2 and check_in_date>?3 and check_in_date>?3 and check_out_date<?4 and check_in_date>?5", nativeQuery = true)
    //public Reservation findReservationByRoomNumber2(int roomNumber,String businessUsername, Date newcheckindate,Date newCheckoudate, Date currentDate);

    @Query(value = "select * from reservation where check_out_date=?1", nativeQuery = true)
    public List<Reservation> getAllReservationsByCheckoutDate(Date date);

    @Query(value = "select * from reservation where check_in_date=?1", nativeQuery = true)
    public List<Reservation> getAllReservationsByCheckinDate(Date date);
}

package com.example.demo.Application.InputPort;

import com.example.demo.Core.Entities.Reservation;
import com.example.demo.Core.Helper.RoomHelper;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public interface ReservationInputPort {
    void createReservation(Time reservationTime, Date reservationDate , Date checkInDate, Date checkOutDate, String businessUsername, String touristUsername, String roomType);
    Reservation getReservationById(int id);
    List<Reservation> getReservationsByUsername(String username);
    List<Reservation> getAllReservations();
    List<Reservation> getAllReservationsByCheckoutDate(Date date);
    void deleteReservation(int id);
    int getRoomReservationNumberByRoomType(String roomType, String businessUsername);
    List<String> getReservedRoomTypes(String businessUsername);
    double getAmountOfRoomsByType(String roomType,String businessUsername);
    void  updateRoomAvailability();
    RoomHelper checkForAvailableRoom(Date checkInDate, Date checkOutDate, String businessUsername, String roomType);
    int getAllReservationsNumber();

}

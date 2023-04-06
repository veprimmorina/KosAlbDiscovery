package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Business;
import com.example.demo.Register.Models.Room;

import java.util.List;

public interface IRoomService {
    void createRoom(int roomNumber, String roomType, boolean isAvailable,double price, double discount ,String businessUsername);
    void createRooms(List<Room> rooms);
    void createRoomWithNumberAndType(String roomType, int roomNumber,String username);
    void createRoomAndType(String roomType, int roomNumber, int roomPrice, String username);
    Room getRoomById(int id);
    List<Room> getAllRooms();
    List<Room> getAllRoomsByBusinessUsername(String businessUsername);
    List<Room> getRoomsToShow(String businessUsername);
    List<Room> getAllAvailableRooms(String roomType,String businessUsername);
    void deleteRoomById(int id);
    void editRoom(int id,int roomNumber, String roomType, boolean isAvailable, Business business);
    void editRoomPriceAndDiscount(int roomPrice, int roomDiscount, String roomType, String username);
    List<String> getAllRoomTypesByBusinessId(String username);
    Room getFirstAvailableRoom(String roomType,String businessUsername);
    void setReservedRoomUnavailable(int roomNumber);
    void setRoomAvailable(int roomNumber);
    Room getRoomByRoomNumber(int roomNumber);


}

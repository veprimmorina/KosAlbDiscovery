package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Helper.RoomHelper;
import com.example.demo.Core.Helper.RoomsHelper;

import java.util.List;


public interface RoomOutputPort {

    RoomHelper getAvailableRoom(String type,String businessUsername);
    RoomsHelper getAvailableRooms(String type, String businessUsername);
    List<RoomHelper> getAllAvailableRooms(String typr, String businessUsername);
    RoomHelper getRoomByRoomNumber(int roomNumber);
    void setReservedRoomUnavailable(int roomNumber);
    void setRoomAvailable(int roomNumber);
}

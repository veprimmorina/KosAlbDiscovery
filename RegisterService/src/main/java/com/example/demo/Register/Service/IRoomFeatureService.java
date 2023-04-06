package com.example.demo.Register.Service;

import com.example.demo.Register.Models.RoomFeature;

import java.util.List;

public interface IRoomFeatureService {

    void createRoomFeature(String feature, String roomType);
    void deleteRoomFeature(int id);
    RoomFeature getRoomFeature(int id);
    List<RoomFeature> getAllRoomFeaturesByRoomType(String roomType);
}

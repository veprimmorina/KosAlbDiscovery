package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Room;
import com.example.demo.Register.Models.RoomFeature;
import com.example.demo.Register.Repository.RoomFeatureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomFeatureService implements IRoomFeatureService{
    private RoomFeatureRepository roomFeatureRepository;
    private IRoomService iRoomService;

    public RoomFeatureService(RoomFeatureRepository roomFeatureRepository, IRoomService iRoomService) {
        this.roomFeatureRepository = roomFeatureRepository;
        this.iRoomService=iRoomService;
    }

    @Override
    public void createRoomFeature(String feature, String roomType) {

        RoomFeature roomFeature = new RoomFeature(feature,roomType);
        this.roomFeatureRepository.save(roomFeature);

    }

    @Override
    public void deleteRoomFeature(int id) {
        this.roomFeatureRepository.deleteById(id);

    }

    @Override
    public RoomFeature getRoomFeature(int id) {
        Optional<RoomFeature> optionalRoomFeature = this.roomFeatureRepository.findById(id);
        return optionalRoomFeature.get();
    }

    @Override
    public List<RoomFeature> getAllRoomFeaturesByRoomType(String roomType) {
        return this.roomFeatureRepository.getRoomFeaturesByRoomType(roomType);
    }
}

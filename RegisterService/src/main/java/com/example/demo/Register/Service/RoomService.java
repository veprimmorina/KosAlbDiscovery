package com.example.demo.Register.Service;

import com.example.demo.Register.Models.Business;
import com.example.demo.Register.Models.Room;
import com.example.demo.Register.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService implements IRoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private IBusinessService iBusinessService;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public void createRoom(int roomNumber, String roomType, boolean isAvailable,double price, double discount ,String businessUsername) {
        Business business = this.iBusinessService.getBusinessByUsername(businessUsername);
       Room room = new Room(roomNumber,roomType,isAvailable,price, discount,business);
        this.roomRepository.save(room);
    }

    @Override
    public void createRooms(List<Room> rooms) {
        this.roomRepository.saveAll(rooms);
    }

    @Override
    public void createRoomWithNumberAndType(String roomType, int roomNumber,String username) {
        Business business = this.iBusinessService.getBusinessByUsername(username);
        List<Room> rooms = this.roomRepository.getAllRoomsByType(roomType,business.getBusiness_ID());
        double roomPrice = rooms.get(0).getPrice();
        double discount = rooms.get(0).getDiscount();

        this.createRoom(roomNumber,roomType,true,roomPrice,discount,username);
    }

    @Override
    public void createRoomAndType(String roomType, int roomNumber, int roomPrice, String username) {
        this.createRoom(roomNumber,roomType,true,roomPrice,0,username);
    }

    @Override
    public Room getRoomById(int id) {
        Optional<Room> roomOptional = this.roomRepository.findById(id);
        return roomOptional.get();
    }

    @Override
    public List<Room> getAllRooms() {
        return this.roomRepository.findAll();
    }

    @Override
    public List<Room> getAllRoomsByBusinessUsername(String businessUsername) {
        Business business = this.iBusinessService.getBusinessByUsername(businessUsername);
        return this.roomRepository.getRoomsByBusinessId(business.getBusiness_ID());
    }

    @Override
    public List<Room> getRoomsToShow(String businessUsername) {
        Business business = this.iBusinessService.getBusinessByUsername(businessUsername);
        List<String> roomTypes = this.getAllRoomTypesByBusinessId(businessUsername);
        List<Room> allRooms = null;
        List<Room> roomsToShow  = new ArrayList<>();
       // Room r = allRooms.get(0);
       // roomsToShow.add(r);

           for(String type : roomTypes){
               allRooms = this.roomRepository.getAllRoomsByType(type, business.getBusiness_ID());
               roomsToShow.add(allRooms.get(0));
           }

        return roomsToShow;
    }

    @Override
    public List<Room> getAllAvailableRooms(String roomType, String businessUsername) {
        Business business = this.iBusinessService.getBusinessByUsername(businessUsername);
        return this.roomRepository.findAllAvailableRooms(roomType,business.getBusiness_ID());
    }

    @Override
    public void deleteRoomById(int id) {
      this.roomRepository.deleteById(id);
    }

    @Override
    public void editRoom(int id, int roomNumber, String roomType, boolean isAvailable, Business business) {

    }

    @Override
    public void editRoomPriceAndDiscount(int roomPrice, int roomDiscount, String roomType, String username) {
        Business business = this.iBusinessService.getBusinessByUsername(username);
        this.roomRepository.updateRoomPriceAndDiscount(roomType,roomPrice,roomDiscount,business.getBusiness_ID());
    }

    @Override
    public List<String> getAllRoomTypesByBusinessId(String username) {
        List<String> roomTypes = new ArrayList<String>();
        Business business = this.iBusinessService.getBusinessByUsername(username);
        List<Room> rooms = this.roomRepository.getRoomsByBusinessId(business.getBusiness_ID());

        for(Room r : rooms){
            String roomType = r.getRoom_type();
            if(!roomTypes.contains(roomType)) {
                roomTypes.add(roomType);
            }
        }
            return roomTypes;


    }

    @Override
    public Room getFirstAvailableRoom(String roomType,String businessUsername) {
        Business business = this.iBusinessService.getBusinessByUsername(businessUsername);
        List<Room> availableRooms = this.roomRepository.findAllAvailableRooms(roomType,business.getBusiness_ID());
        if(availableRooms.size() > 0){
            return availableRooms.get(0);
        }else{
            return null;
        }

    }

    @Override
    public void setReservedRoomUnavailable(int roomNumber) {
        this.roomRepository.setReservedRoomUnavailable(roomNumber);

    }

    @Override
    public void setRoomAvailable(int roomNumber) {
        this.roomRepository.setRoomAvailable(roomNumber);
    }

    @Override
    public Room getRoomByRoomNumber(int roomNumber) {
        return this.roomRepository.getRoomByRoomNumber(roomNumber);
    }
}

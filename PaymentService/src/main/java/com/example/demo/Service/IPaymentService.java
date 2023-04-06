package com.example.demo.Service;

import com.example.demo.Helper.ReservationHelper;
import com.example.demo.Models.Payment;

public interface IPaymentService {
    void createPayment(double amount, String hotel,String roomType);
    void deletePayment(int id);
    Payment getPayment(int id);
    void setReservationHelper(ReservationHelper reservationHelper);
    ReservationHelper getReservationHelper();
    void createReservation(ReservationHelper reservationHelper);
}

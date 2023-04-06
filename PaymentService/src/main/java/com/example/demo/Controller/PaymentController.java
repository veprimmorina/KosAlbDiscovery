package com.example.demo.Controller;

import com.example.demo.Helper.PaymentHelper;
import com.example.demo.Helper.ReservationHelper;
import com.example.demo.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("payment")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private CheckOutController checkOutController;


    @PostMapping("get/data")
    public boolean getPaymentData(@RequestBody PaymentHelper paymentHelper){
        this.paymentService.setPaymentHelper(paymentHelper);
        return true;
    }


    @PostMapping("/create")
    public void createPayment(@RequestBody PaymentHelper paymentHelper){
        this.paymentService.createPayment(paymentHelper.getAmount(),paymentHelper.getHotel(),paymentHelper.getRoomType());

    }

    @PostMapping("/get/reservation")
    public void getReservation(@RequestBody ReservationHelper reservationHelper){
        this.paymentService.setReservationHelper(reservationHelper);
    }

    @PostMapping("/createreservation")
    public void createReservation(@RequestBody ReservationHelper reservationHelper){
        this.paymentService.createReservation(reservationHelper);
    }
}

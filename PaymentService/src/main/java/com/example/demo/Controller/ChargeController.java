package com.example.demo.Controller;

import com.example.demo.Entity.ChargeRequest;
import com.example.demo.Helper.ReservationHelper;
import com.example.demo.Service.IPaymentService;
import com.example.demo.Service.StripeService;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

@Controller
@RequestMapping("pay")
public class ChargeController {
    @Autowired
    private StripeService paymentsService;

    @Autowired
    private IPaymentService paymentService;

   // private String paymentStatus="";
    private ReservationHelper reservationHelper;

    public ChargeController(StripeService paymentsService) {
        this.paymentsService = paymentsService;
    }

    @PostMapping("/charge")
    public String charge(ChargeRequest chargeRequest, Model model)
            throws StripeException, AuthenticationException {
        chargeRequest.setDescription("Example charge");
        chargeRequest.setCurrency(ChargeRequest.Currency.EUR);
        Charge charge = paymentsService.charge(chargeRequest);
        model.addAttribute("id", charge.getId());
        model.addAttribute("status", charge.getStatus());
        model.addAttribute("chargeId", charge.getId());
        model.addAttribute("balance_transaction", charge.getBalanceTransaction());

        if(charge.getStatus().equals("succeeded")){
            ReservationHelper rh = this.paymentService.getReservationHelper();
            this.paymentService.createReservation(rh);
        }

        return "result";
    }
    @ExceptionHandler(StripeException.class)
    public String handleError(Model model, StripeException ex) {
        model.addAttribute("error", ex.getMessage());
        return "result";
    }
//status --> succeeded
   // @GetMapping("/get/status")
   // public String setPaymentStatus(String status){
   //   return  this.paymentStatus=status;
   // }

    @PostMapping("/get/reservation")
    public void getReservation(@RequestBody ReservationHelper reservationHelper){
        this.reservationHelper=reservationHelper;
    }


}

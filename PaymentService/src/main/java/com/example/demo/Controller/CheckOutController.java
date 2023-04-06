package com.example.demo.Controller;

import com.example.demo.Entity.ChargeRequest;
import com.example.demo.Helper.PaymentHelper;
import com.example.demo.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
public class CheckOutController {

    //@Value("${stripe_public_key}")
    private String stripePublicKey="pk_test_51J59QBBGVeEfRZf72R7Puxe9772bDmnGRpinGgr6ZEzlbOECxJsMO5BYVLZC5IcC400OEDd0gD4vJ0uwAjwgCsF500gq1lKYYn";
    @Autowired
    private PaymentService paymentService;




//PaymentHelper paymentHelper = new PaymentHelper(123,"hotel","Suite",23);
    @RequestMapping("/checkout")
    public String checkout(Model model){
        PaymentHelper paymentHelper = this.paymentService.getPaymentHelper();
        model.addAttribute("amount", (int)(paymentHelper.getAmount() * 100)); // in cents
        model.addAttribute("stripePublicKey", stripePublicKey);
        model.addAttribute("currency", ChargeRequest.Currency.EUR);
        model.addAttribute("roomType",paymentHelper.getRoomType());
        model.addAttribute("hotelName",paymentHelper.getHotel());


        return "checkout";
    }

}

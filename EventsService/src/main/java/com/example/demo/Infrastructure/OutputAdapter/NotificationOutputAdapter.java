package com.example.demo.Infrastructure.OutputAdapter;

import com.example.demo.Core.Helper.UserHelper;
import com.example.demo.Core.OutputPort.NotificationOutputPort;
import com.example.demo.Infrastructure.Helper.UserRabbitmqHelper;
import com.example.demo.RabbitConfiguration.MessagingConfiguration;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.validation.constraints.Email;

@Service
public class NotificationOutputAdapter implements NotificationOutputPort {

    @Autowired
    private RabbitTemplate template;

    @Override
    public void sendEmail(String email) {

        UserRabbitmqHelper userRabbitmqHelper=new UserRabbitmqHelper(email);
        template.convertAndSend(MessagingConfiguration.EXCHANGE, MessagingConfiguration.KEY, userRabbitmqHelper);


    }


    /*@Override
    public void sendEmail(String email) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(email);

        String reservationServiceURL = "http://localhost:8001/api/email/message/"+email;
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(reservationServiceURL,request,String.class);


    }

     */
}
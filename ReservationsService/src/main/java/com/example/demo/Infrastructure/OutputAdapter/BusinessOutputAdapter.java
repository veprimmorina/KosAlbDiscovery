package com.example.demo.Infrastructure.OutputAdapter;

import com.example.demo.Core.Entities.Product;
import com.example.demo.Core.Helper.BusinessHelper;
import com.example.demo.Core.OutputPort.BusinessOutputPort;
import com.example.demo.Core.OutputPort.ProductOutputPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class BusinessOutputAdapter implements BusinessOutputPort {

    @Autowired
    private ProductOutputPort productOutputPort;
    @Override
    public BusinessHelper getBusinessByUsername(String username) {
        RestTemplate restTemplate=new RestTemplate();
        String registerServiceURL = "http://localhost:8080/api/register/business/get/business/byUsername/"+username;
        ResponseEntity<BusinessHelper> responseEntity = restTemplate.getForEntity(registerServiceURL,BusinessHelper.class);

        BusinessHelper businessHelper= responseEntity.getBody();

        return businessHelper;
    }

    @Override
    public void saveProduct(Product product) {
        productOutputPort.save(product);
    }
}

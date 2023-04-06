package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Entities.Product;
import com.example.demo.Core.Helper.BusinessHelper;


public interface BusinessOutputPort {

    BusinessHelper getBusinessByUsername(String username);

    void saveProduct(Product product);
}

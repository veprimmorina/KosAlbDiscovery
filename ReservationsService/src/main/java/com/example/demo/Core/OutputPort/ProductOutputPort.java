package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductOutputPort extends JpaRepository<Product,Integer > {


}

package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepo extends JpaRepository<OrderDetail, Long> {
    OrderDetail findByOrderId(Long orderId);
}

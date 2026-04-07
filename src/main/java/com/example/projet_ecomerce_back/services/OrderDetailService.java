package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.OrderDetail;
import java.util.List;

public interface OrderDetailService {
    OrderDetail saveOrderDetail(OrderDetail orderDetail);
    OrderDetail findById(Long id);
    OrderDetail updateOrderDetail(Long id, OrderDetail orderDetail);

    OrderDetail findByOrderId(Long orderId);
    public List<OrderDetail> getallorderdetail();
    void deleteOrderDetail(Long id);
}


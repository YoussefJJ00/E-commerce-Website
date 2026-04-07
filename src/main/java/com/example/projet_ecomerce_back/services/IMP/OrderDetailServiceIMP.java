package com.example.projet_ecomerce_back.services.IMP;

import com.example.projet_ecomerce_back.models.OrderDetail;
import com.example.projet_ecomerce_back.repositories.OrderDetailRepo;
import com.example.projet_ecomerce_back.services.OrderDetailService;
import com.example.projet_ecomerce_back.models.Commande;
import com.example.projet_ecomerce_back.models.OrderDetail;
import com.example.projet_ecomerce_back.repositories.OrderDetailRepo;
import com.example.projet_ecomerce_back.services.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceIMP implements OrderDetailService {

    @Autowired
    private OrderDetailRepo orderDetailRepository;

    @Override
    public OrderDetail saveOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail findByOrderId(Long orderId) {
        return orderDetailRepository.findByOrderId(orderId);
    }

    public List<OrderDetail> getallorderdetail(){
        return orderDetailRepository.findAll();
    }
    @Override
    public OrderDetail findById(Long id) {
        return orderDetailRepository.findById(id).orElse(null);
    }

    @Override
    public OrderDetail updateOrderDetail(Long id, OrderDetail orderDetail) {
        OrderDetail existingDetail = findById(id);
        if (existingDetail != null) {
            existingDetail.setCountry(orderDetail.getCountry());
            existingDetail.setCity(orderDetail.getCity());
            existingDetail.setAddress(orderDetail.getAddress());
            // Update other fields if necessary
            return orderDetailRepository.save(existingDetail);
        }
        return null;
    }

    @Override
    public void deleteOrderDetail(Long id) {
        orderDetailRepository.deleteById(id);
    }
}

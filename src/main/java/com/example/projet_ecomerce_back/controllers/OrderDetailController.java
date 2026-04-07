package com.example.projet_ecomerce_back.controllers;


import com.example.projet_ecomerce_back.models.OrderDetail;
import com.example.projet_ecomerce_back.models.Commande;
import com.example.projet_ecomerce_back.services.OrderDetailService;
import com.example.projet_ecomerce_back.services.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/orderdetails")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @Autowired
    private CommandeService commandeService;

    @PostMapping("/create/{orderId}")
    public OrderDetail createOrderDetail(@PathVariable Long orderId,  OrderDetail orderDetail) {
        Commande order = commandeService.GetOneCommande(orderId);
        orderDetail.setOrder(order);
        return orderDetailService.saveOrderDetail(orderDetail);
    }

    @GetMapping("/list")
    public List<OrderDetail> getall() {
        return orderDetailService.getallorderdetail();
    }

    @GetMapping("/one/{id}")
    public OrderDetail getOrderDetailById(@PathVariable Long id) {
        return orderDetailService.findById(id);
    }

    @PutMapping("/update/{id}")
    public OrderDetail updateOrderDetail(@PathVariable Long id, @RequestBody OrderDetail orderDetail) {
        return orderDetailService.updateOrderDetail(id, orderDetail);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteOrderDetail(@PathVariable Long id) {
        orderDetailService.deleteOrderDetail(id);
    }
}

package com.example.projet_ecomerce_back.controllers;

import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Commande;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.repositories.CommandeRepo;
import com.example.projet_ecomerce_back.services.ClientService;
import com.example.projet_ecomerce_back.services.CommandeService;
import com.example.projet_ecomerce_back.services.IMP.CategoryserviceIMP;
import com.example.projet_ecomerce_back.services.IMP.CommandeIMP;
import com.example.projet_ecomerce_back.services.IMP.ProduitIMP;
import com.example.projet_ecomerce_back.utils.StorageService;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/commande")
public class Commandecontroller {
    @Autowired
    CommandeIMP imp;
    @Autowired
    ClientService clnimp;
    @Autowired
    ProduitIMP produitIMP;

    @PostMapping("/create/{IdClient}")
    public Commande creation(
            @ModelAttribute Commande CM,
            @PathVariable Long IdClient,
            @RequestParam String ids,  // Accept ids as a comma-separated string
            @RequestParam Double total,
            @RequestParam String quantite,
            @RequestParam String country,
            @RequestParam String address,
            @RequestParam String city
            ) {  // Accept quantite as a comma-separated string

        System.out.println("date******" + CM.getOrdredate());

        Client cl = clnimp.GetOneClient(IdClient);
        CM.setClient(cl);
        CM.setTotal(total);
        CM.setCountry(country);
        CM.setAddress(address);
        CM.setCity(city);

        // Convert ids from comma-separated string to List<Long>
        List<Long> idList = Arrays.stream(ids.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        // Convert quantite from comma-separated string to int[]
        int[] quantiteArray = Arrays.stream(quantite.split(","))
                .mapToInt(Integer::parseInt)
                .toArray();

        CM.setQuantite(quantiteArray);

        for (int i = 0; i < idList.size(); i++) {
            Produit p = produitIMP.GetOneProduit(idList.get(i));
            CM.Add_produit(p);
        }

        return imp.createCommande(CM);
    }

    @GetMapping("/unconfirmed")
    public List<Commande> getUnconfirmed() {
        return imp.GetUnconfirmedOrders();
    }

    @GetMapping("/list")
    public List<Commande> getall() {
        return imp.GetAllCommande();
    }

    @GetMapping("/one/{id}")
    public Commande getone(@PathVariable Long id) {
        return imp.GetOneCommande(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        imp.deleteCommande(id);
    }

    @PatchMapping("/confirm/{id}")
    public void confirm(@PathVariable Long id) {
        imp.confirmOrder(id);
    }

    @PatchMapping("/update/{id}/{clnid}")
    public Commande update(@PathVariable Long id, Commande o, @PathVariable Long clnid, Double total) {
        o.setId(clnid);
        o.setId(id);
        Commande old = imp.GetOneCommande(id);
        if (o.getOrdredate() == null) {
            o.setOrdredate(old.getOrdredate());
        }
        if (o.getNum() == null) {
            o.setNum(old.getNum());
        }
        return imp.UpdateCommande(o);
    }
}

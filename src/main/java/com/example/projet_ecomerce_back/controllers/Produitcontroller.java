package com.example.projet_ecomerce_back.controllers;

import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.services.IMP.CategoryserviceIMP;
import com.example.projet_ecomerce_back.services.IMP.ProduitIMP;
import com.example.projet_ecomerce_back.services.ProduitService;
import com.example.projet_ecomerce_back.utils.StorageService;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/produit")
public class Produitcontroller {
    @Autowired
    ProduitIMP produitIMP;

    @Autowired
    StorageService str ;

    @Autowired
    CategoryserviceIMP categoryIMP;
    @Autowired
    private StorageService storageService;

    @PostMapping("/create/{IdCat}")
    public Produit creation (Produit p , @RequestParam("file") MultipartFile file ,  @PathVariable Long IdCat ) {
        String name= str.store(file) ;
        p.setPhoto(name);
        Category cat = categoryIMP.GetOneCategory(IdCat) ;
        p.setCat(cat);

        return produitIMP.createProduit(p) ;
    }
    @PostMapping("/create0")
    public Produit creation (Produit p) {
        return produitIMP.createProduit(p) ;
    }


    @GetMapping("/list")
    public List<Produit> list(@RequestParam("catId") Optional<Long> IdCat){
        return produitIMP.getProductsByCategoryId(IdCat) ;
    }


    @GetMapping("/one/{id}")
    public Produit getone (@PathVariable Long id){
        return produitIMP.GetOneProduit(id) ;
    }


    @DeleteMapping("/delete_one/{id}")
    public void deleteme (@PathVariable Long id){
        produitIMP.deleteProduit(id);
    }


    @PatchMapping("/update/{id}/{IdCat}")
    public Produit update(@PathVariable Long id, Produit p, @RequestParam("file") MultipartFile file , @PathVariable Long IdCat){
        p.setId(id);
        Produit ancien = produitIMP.GetOneProduit(id);

        String name= str.store(file) ;
        p.setPhoto(name);
        Category cat = categoryIMP.GetOneCategory(IdCat) ;
        p.setCat(cat);
        if (p.getName() == null) { p.setName(ancien.getName()); }
        if (p.getPrice() == null) { p.setPrice(ancien.getPrice()); }

        return produitIMP.UpdateProduit(p) ;
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getfile(@PathVariable String filename ){
        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

}

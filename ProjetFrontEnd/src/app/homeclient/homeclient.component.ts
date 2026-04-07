import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';  // Import SweetAlert2
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class homeclientComponent implements OnInit {
  listproduit: any[] = []; // Initialize as an empty array
  idc: string;
  role: any;
  c: number = 1;
  ids: any[] = []; // Initialize the array here
  categories: any[] = [];

  categoryId = ''

  constructor(private service: MyserviceService, private datePipe: DatePipe, private router:Router, private http: HttpClient) {}

  ngOnInit(): void {
    if(localStorage.getItem("role")=="admin"){this.router.navigateByUrl("/home")}
    else{
    this.getCategories();
    this.fAllproduit(this.categoryId);
    this.idc = localStorage.getItem("idc");
    const storedCart = JSON.parse(localStorage.getItem("listcmd"));
    if (storedCart === null) {
      this.ids = [];
    } else {
      this.ids = storedCart;
    }
    this.role = localStorage.getItem("role");}
  }

  onCategoryChange() {
    this.fAllproduit(this.categoryId)
  }

  fAllproduit(categoryId: string) {
    this.service.AllProduit(categoryId).subscribe(
      (res: any[]) => {
        console.log("liste produit", res);
        this.listproduit = res.map(p => ({
          ...p,
          quantity: 1 
        }));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ajouterpanier(p: any) {
    // Check if product is available
    if (!p.disponible) {
      Swal.fire({
        title: 'Out of Stock',
        text: 'This product is out of stock.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    Swal.fire({
      title: 'Successful ',
      text: 'product added Successfully to cart.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    // Check if product is already in the cart
    const existingProduct = this.ids.find(item => item.id === p.id);

    if (existingProduct) {
      // Update the quantity if the product already exists in the cart
      existingProduct.quantity += p.quantity;
    } else {
      // Add the product to the cart with the selected quantity
      this.ids.push({ ...p, quantity: p.quantity });
    }

    console.log("list id ", this.ids);
    localStorage.setItem("listcmd", JSON.stringify(this.ids));
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  getCategories() {  this.http.get(`${environment.baseUrl}/category/list`).subscribe(
    (res: any[]) => {
      console.log("liste categories", res);
      this.categories = res;
    },
    (error) => {
      console.log(error);
    }
  ); }
}

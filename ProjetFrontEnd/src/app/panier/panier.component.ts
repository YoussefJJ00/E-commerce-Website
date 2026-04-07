import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  listpc: any[] = [];
  form: FormGroup; // Define the form property
  idc = localStorage.getItem("idc");
  num = uuidv4();
  role: any;
  showModal = false;
  idcommande: String;

  constructor(
    private service: MyserviceService,
    private datePipe: DatePipe,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem("listcmd");
    if (storedCart) {
      this.listpc = JSON.parse(storedCart);
    }
    this.role = localStorage.getItem("role");
    if (this.role == 'admin') {
      this.router.navigate(['/home']);
    }

    // Initialize quantity if not present
    this.listpc.forEach(product => {
      if (!product.quantity) {
        product.quantity = 1;
      }
    });

    console.log("list commander", this.listpc);
    console.log("***num**", this.num.substring(this.num.length - 6));

    // Initialize the form using FormBuilder
    this.form = this.fb.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  commander() {
    const d = new Date().toISOString();
    const formdata = new FormData();
    formdata.append('address', this.form.value.address);
    formdata.append('city', this.form.value.city);
    formdata.append('country', this.form.value.country);
    formdata.append("ordredate", d);
    formdata.append("num", this.num.substring(this.num.length - 6));

    // Prepare the ids and quantite data
    let ids = this.listpc.map(product => product.id).join(',');
    let quantite = this.listpc.map(product => product.quantity).join(',');

    const total = this.calculateTotal();
    formdata.append("total", total.toString());
    formdata.append("ids", ids);
    formdata.append("quantite", quantite);

    this.service.Ajoutcommande(formdata, this.idc).subscribe(
      (res: any) => {
        // Assuming the API returns the order ID in the response (e.g., res.id)
        this.idcommande = res.id;  // Store the created order ID
    
        Swal.fire({
          title: 'Success!',
          text: 'Your order has been placed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          localStorage.removeItem("listcmd");
          window.location.reload();
        });
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'There was an error placing your order. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.log(error);
      }
    );
  }

  calculateTotal(): number {
    let total = 0;
    for (let product of this.listpc) {
      total += parseFloat(product.price) * product.quantity;
    }
    return total;
  }

  cancel(productId: number) {
    this.listpc = this.listpc.filter(product => product.id !== productId);
    console.log('Product with ID', productId, 'has been removed from the cart');
    localStorage.setItem('listcmd', JSON.stringify(this.listpc));
  }

  increaseQuantity(product: any) {
    product.quantity++;
    localStorage.setItem('listcmd', JSON.stringify(this.listpc));
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      localStorage.setItem('listcmd', JSON.stringify(this.listpc));
    }
  }

  openOrderDetailsModal() {
    this.showModal = true;
  }

  closeOrderDetailsModal() {
    this.showModal = false;
  }

  submitOrderDetails() {
    if (this.form.invalid) {
      Swal.fire({
        title: 'Incomplete Form!',
        text: 'Please fill out all required order details before submitting.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return; // Prevents further execution if form is invalid
    }

    // Proceed with order submission if the form is valid
    this.commander();
    this.closeOrderDetailsModal();
  }
}

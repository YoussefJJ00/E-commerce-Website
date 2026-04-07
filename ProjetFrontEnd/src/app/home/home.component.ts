import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
  import 'jspdf-autotable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders: any[] = [];
  orderDetails: any[] = [];
  id: string;

  constructor(private router: Router, private service: MyserviceService) {}

  ngOnInit(): void {
    if (localStorage.getItem("role") === "client") {
      this.router.navigateByUrl("/homeclient");
    }

    this.loadUnconfirmedOrders(); // Fetch only unconfirmed orders
  }

  loadUnconfirmedOrders() {
    this.service.getUnconfirmedOrders().subscribe(
      (res: any[]) => {
        this.orders = res;
        console.log("Unconfirmed orders", this.orders);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  confirmOrder(orderId: number) {
    this.service.confirmOrder(orderId).subscribe(
      (res) => {
        Swal.fire('Confirmed!', 'The order has been confirmed.', 'success');
        this.loadUnconfirmedOrders(); // Refresh the orders list after confirmation
      },
      (error) => {
        Swal.fire('Error!', 'There was a problem confirming the order.', 'error');
        console.log(error);
      }
    );
  }
  
  
 

  printOrder(orderDetails: any) {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.setFont('Helvetica', 'bold');
      doc.text('Order Receipt', 10, 20);
      doc.setFontSize(12);
      doc.setFont('Helvetica', 'normal');
      
      let yPosition = 30;
  
      orderDetails.forEach((od: any, idx: number) => {
          // Order Information
          doc.setFontSize(14);
          doc.setFont('Helvetica', 'bold');
          doc.text(`Order ID: ${od.id}`, 10, yPosition);
          yPosition += 10;
          
          doc.setFontSize(12);
          doc.setFont('Helvetica', 'normal');
          doc.text(`Order Date: ${new Date(od.ordredate).toLocaleDateString()}`, 10, yPosition);
          yPosition += 10;
          doc.text(`Client Name: ${od.client?.username}`, 10, yPosition);
          yPosition += 10;
          doc.text(`Client Phone Number: ${od.client?.phone}`, 10, yPosition);
          yPosition += 10;
          doc.text(`Client Country: ${od.country}`, 10, yPosition);
          yPosition += 10;
          doc.text(`Client City: ${od.city}`, 10, yPosition);
          yPosition += 10;
          doc.text(`Client Address: ${od.address}`, 10, yPosition);
          yPosition += 20; // Extra space before products
  
          // Products List
          doc.setFontSize(12);
          doc.setFont('Helvetica', 'bold');
          doc.text('Products:', 10, yPosition);
          yPosition += 10;
  
          doc.setFontSize(12);
          doc.setFont('Helvetica', 'normal');
          od.produitNames.forEach((product: string, index: number) => {
              doc.text(`Product ${index + 1}: ${od.quantite[index]} * ${product || 'Unknown Product'}`, 10, yPosition);
              yPosition += 10;
          });
  
          doc.text(`Order Total: ${od.total || 0} TND`, 10, yPosition);
          yPosition += 20; // Extra space between orders
      });
  
      doc.save('orders.pdf');
  }
  
  
}

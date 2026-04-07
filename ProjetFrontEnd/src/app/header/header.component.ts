import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: any;
  role: any;

  constructor(private service: MyserviceService, private router: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.id = localStorage.getItem("idc");
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out from your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("idc");
        localStorage.removeItem("state");
        localStorage.removeItem("role");
        localStorage.removeItem("listcmd");
        // localStorage.removeItem("token");

        this.service.logout(localStorage.getItem("token")).subscribe(
          (res) => {
            Swal.fire({
              title: 'Logged Out',
              text: 'You have been successfully logged out.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            this.router.navigateByUrl('/');
          },
          (error) => {
            console.log("error", error);
            Swal.fire({
              title: 'Error',
              text: 'An error occurred during logout. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        );
      }
    });
  }
}

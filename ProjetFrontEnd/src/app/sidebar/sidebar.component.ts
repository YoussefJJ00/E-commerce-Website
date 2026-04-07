import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private service: MyserviceService) {}

  ngOnInit(): void {}

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        
        localStorage.removeItem('idc');
        localStorage.removeItem('state');
        localStorage.removeItem('role');
        
        console.log('token', localStorage.getItem('token'));
        
       
        this.service.logout(localStorage.getItem('token')).subscribe(
          (res) => {
            Swal.fire('Logged out!', 'You have been logged out.', 'success');
            this.router.navigateByUrl('');
          },
          (error) => {
            console.log('error', error);
            Swal.fire('Error!', 'There was a problem logging out.', 'error');
          }
        );
      }
    });
  }
}

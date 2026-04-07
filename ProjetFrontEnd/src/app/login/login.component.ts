import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  resultlogin: any;

  constructor(
    private router: Router,
    private service: MyserviceService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const data = {
      "username": this.form.value.username,
      "password": this.form.value.password
    };
    
    this.service.login(data).subscribe(
      (res) => {
        this.resultlogin = res;
        console.log("Successfully logged in", this.resultlogin);
        localStorage.setItem("idc", this.resultlogin.id);
        localStorage.setItem("token", this.resultlogin.token);
        localStorage.setItem("role", this.resultlogin.role);
        localStorage.setItem("state", "0");

        if (this.resultlogin.role === "admin") {
          this.router.navigateByUrl("/home");
        } else {
          this.router.navigateByUrl("/homeclient");
        }
      },
      (error: HttpErrorResponse) => {
        // Use SweetAlert2 to show error message
        if (error.status === 401) {
          Swal.fire({
            title: 'Login Failed',
            text: 'Password or Username are incorrect. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'An error occurred. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        console.log(error);
      }
    );
  }

  signup() {
    this.router.navigateByUrl("/signup");
  }
}

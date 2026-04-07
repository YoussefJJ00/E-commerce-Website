import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  fileToUpload: Array<File> = [];

  constructor(
    private service: MyserviceService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'client') {
      this.router.navigateByUrl('/homeclient');
    } else {
      this.form = this.formbuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        adress2: ['', Validators.required],
        file: ['', Validators.required]
      });
    }
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  creation() {
    let formdata = new FormData();
    formdata.append('username', this.form.value.username);
    formdata.append('password', this.form.value.password);
    formdata.append('email', this.form.value.email);
    formdata.append('phone', this.form.value.phone);
    formdata.append('role', 'client');
    formdata.append('file', this.fileToUpload[0]);

    this.service.Ajoutclient(formdata).subscribe(
      (res) => {
        Swal.fire({
          title: 'Account Created!',
          text: 'Please check your email to confirm.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl('/');
      },
      (error) => {
        if (error.status === 401) {
          Swal.fire({
            title: 'Error',
            text: 'Please complete all fields and ensure the email is not already in use',
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

  login() {
    this.router.navigateByUrl('/login');
  }
}

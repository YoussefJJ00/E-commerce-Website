import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class addclientComponent implements OnInit {
  form: FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service: MyserviceService, private router: Router, private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    if (localStorage.getItem("role") == "client") { this.router.navigateByUrl("/homeclient") }
    else {
      this.form = this.formbuilder.group({
        username: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        phone: ["", Validators.required],
        adress2: ["", Validators.required],
        file: ['', Validators.required],


      })
    }

  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  creation() {
    let formdata = new FormData()
    formdata.append("username", this.form.value.username)
    formdata.append("email", this.form.value.email)
    formdata.append("password", this.form.value.password)
    formdata.append("phone", this.form.value.phone)
    formdata.append("role", "client")
    formdata.append("file", this.fileToUpload[0])

    this.service.Ajoutclient(formdata).subscribe(
      (res) => {
        console.log("success to create admin");
        this.router.navigateByUrl("client")

      },



      (error) => { console.log(error) }
    )
  }

}
{

}

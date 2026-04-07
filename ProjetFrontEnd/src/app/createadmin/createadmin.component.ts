import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})

export class CreateadminComponent implements OnInit {
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
      this.form=this.formbuilder.group({
        username:["",Validators.required],
        email:["",Validators.required],
        password:["",Validators.required],
        phone:["",Validators.required],
        adress2:["",Validators.required],
        file:['',Validators.required],
        
       
      })
    }
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  creation(){

    let formdata=new FormData()
    formdata.append("username",this.form.value.username)
    formdata.append("phone",this.form.value.phone)
    
    formdata.append("email",this.form.value.email)
    formdata.append("password",this.form.value.password)
    
    formdata.append("adress2",this.form.value.adress2)
    formdata.append("role","admin")
    formdata.append("file",this.fileToUpload[0])


    this.service.Ajoutadmin(formdata).subscribe(
      (res)=>{
        console.log("succes to create admin") ;
        this.router.navigateByUrl("/admin")  
    
    },



      (error)=>{console.log(error)}
    )
  }

}

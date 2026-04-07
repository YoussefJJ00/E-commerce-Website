import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class addcategoryComponent implements OnInit {
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder) {}

  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
      this.form=this.formbuilder.group({
        name:['',Validators.required],
        description:['',Validators.required],
        
       
      })
    }
  }

  createcategory(){
    console.log("name",this.form.value.name),
    console.log("description",this.form.value.description),
    console.log("file",this.fileToUpload[0])
    let formdata= new FormData()
    formdata.append("name",this.form.value.name),
    formdata.append("description",this.form.value.description),
    this.service.Ajoutcategory(formdata).subscribe(
      (res)=>{
        console.log("Success");
        this.router.navigateByUrl("category")
      },
      (error)=>{console.log("Error")})
  
  
  
  }

}
 {

}

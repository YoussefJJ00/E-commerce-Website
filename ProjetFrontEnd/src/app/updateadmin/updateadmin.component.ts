import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {
  id=this.activatedrouted.snapshot.params['id']
  oneadmin:any

  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder ,private activatedrouted:ActivatedRoute) {}
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
           
      })}
      this.Detailadmin() 
      
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  
Detailadmin(){
  this.service.Detailsadmin(this.id).subscribe(
    (res)=>{this.oneadmin=res;
    console.log("details d'admin" , res);
  this.form.patchValue({
    username:this.oneadmin.username,
    email:this.oneadmin.email,
    phone:this.oneadmin.phone,
    adress2:this.oneadmin.adress2,
  })},
    (error)=>{console.log("error")}
  )
}

modification(){
    let formdata=new FormData()
    formdata.append("username",this.form.value.username)
    formdata.append("phone",this.form.value.phone)
    
    formdata.append("email",this.form.value.email)
    formdata.append("password",this.form.value.password)
    
    formdata.append("adress2",this.form.value.adress2)
    formdata.append("role","admin")
    if (this.fileToUpload[0]!=null){
    formdata.append("file",this.fileToUpload[0])}
    else{
      formdata.append("file",this.oneadmin.file)
    }

    

    this.service.updateadmin(formdata,this.id).subscribe(
      (res)=>{
        console.log("succes to update admin") ;
        this.router.navigateByUrl("/admin")  
    
    },



      (error)=>{console.log(error)}
    )
  }


}

 {

}

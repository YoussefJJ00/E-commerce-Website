import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  oneclient:any
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder,private activatedrouted:ActivatedRoute) {}
  ngOnInit(): void { if(localStorage.getItem("idc")!=this.id && localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
  else{
      this.form=this.formbuilder.group({
        username:["",Validators.required],
        email:["",Validators.required],
        password:["",Validators.required],
        phone:["",Validators.required],
        adress2:["",Validators.required],
        file:['',Validators.required],
        
       
      })}
      this.Detailclient() 
      
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    
    console.log(this.fileToUpload);
  }
  Detailclient(){
    this.service.Detailsclient(this.id).subscribe(
      (res)=>{this.oneclient=res;
        console.log("details client" , res),
        this.form.patchValue({
          username:this.oneclient.username,
          email:this.oneclient.email,
          phone:this.oneclient.phone,
          adress2:this.oneclient.adress2,
          
        })},
      (error)=>{console.log("error")}
    )
  }

  modification(){

    
    let formdata=new FormData()
    formdata.append("username",this.form.value.username)
    formdata.append("password",this.form.value.password)
    formdata.append("email",this.form.value.email)
    formdata.append("phone",this.form.value.phone)
    formdata.append("adress2",this.form.value.adress2)
    formdata.append("role","client")
  
  formdata.append("file", this.fileToUpload[0]);
    

    this.service.updateClient(this.id,formdata).subscribe(
      (res)=>{
        console.log("succes to update client") ;
        this.router.navigateByUrl("/client")  
    
    },



      (error)=>{console.log(error)}
    )
  }

}
{

}
{

}

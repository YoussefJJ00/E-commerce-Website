import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent  implements OnInit {
  onecategory:any
  id=this.activatedrouted.snapshot.params['id']
 
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder, private activatedrouted:ActivatedRoute) {}

  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
      this.form=this.formbuilder.group({
        name:["",Validators.required],
        description:["",Validators.required],
        
       
      })}
      this.Detailcategory() 
      
  }
  
Detailcategory(){
  this.service.Detailscategory(this.id).subscribe(
    (res)=>{this.onecategory=res;console.log("details category" , res),
    this.form.patchValue({
      name:this.onecategory.name,
      description:this.onecategory.description,


       
     })},
    (error)=>{console.log("error")}
  )
}

  modification(){

    let formdata=new FormData()
    formdata.append("name",this.form.value.name)
    formdata.append("description",this.form.value.description)
   
    this.service.updatecat(this.id,formdata).subscribe(
      (res)=>{
        console.log("succes to update category") ;
        this.router.navigateByUrl("/category")  
    
    },



      (error)=>{console.log(error)}
    )
  }

}
 {

}

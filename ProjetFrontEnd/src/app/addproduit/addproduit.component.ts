import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  listcategory:any
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
  this.fAllcategory() 
  this.form=this.formbuilder.group({
    name:["",Validators.required],
    price:["",Validators.required],
    disponible:["",Validators.required],
    file:["",Validators.required],
    idcat:["",Validators.required],
  
    
   
  })}
  
    
  
}
fAllcategory(){
  this.service.AllCategory().subscribe(
    (res)=>{console.log("liste category",res); this.listcategory=res}, 
    (error)=>{console.log(error)}

  )
}
handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  creation(){

    let formdata=new FormData()
    formdata.append("name",this.form.value.name)
    formdata.append("price",this.form.value.price)
    formdata.append("disponible",this.form.value.disponible)
    formdata.append("file",this.fileToUpload[0])

    this.service.Ajoutproduit(formdata,this.form.value.idcat).subscribe(
      (res)=>{
        console.log("succes to create produit") ;
        this.router.navigateByUrl("/produit")  
    
    },



      (error)=>{console.log(error)}
    )
  }

}




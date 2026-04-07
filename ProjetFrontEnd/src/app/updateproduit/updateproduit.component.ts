import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  oneproduit:any
  id=this.activatedrouted.snapshot.params['id']
  listcategory:any
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service:MyserviceService,private router:Router,private formbuilder:FormBuilder ,  private activatedrouted:ActivatedRoute) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
   this.Detailproduit()
   this.fAllcategory()
  this.form=this.formbuilder.group({
    name:["",Validators.required],
    price:["",Validators.required],
    disponible:["",Validators.required],
    file:["",Validators.required],
    idcat:["",Validators.required],  

  })
}
    
  
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
Detailproduit(){
  this.service.Detailsproduit(this.id).subscribe(
    (res)=>{this.oneproduit=res;console.log("details produit" , res),
    this.form.patchValue({
      name:this.oneproduit.name,
      price:this.oneproduit.price,


       
     })},
    (error)=>{console.log("error")}
  )
}

  modification(){

    let formdata=new FormData()
    formdata.append("name",this.form.value.name)
    formdata.append("price",this.form.value.price)
    formdata.append("disponible",this.form.value.disponible)
    formdata.append("file",this.fileToUpload[0])

    this.service.updateproduit(this.id,this.form.value.idcat,formdata,).subscribe(
      (res)=>{
        console.log("succes to create produit") ;
        this.router.navigateByUrl("/produit")  ;    
    
    },



      (error)=>{console.log(error)}
    )
  }

}



 {

}

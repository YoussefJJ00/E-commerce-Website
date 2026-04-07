import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {
  c:number=1
  listproduit: any
  id:any
  role:any
  constructor(private service:MyserviceService ,private router:Router){}
ngOnInit(): void {
   
  this.id=localStorage.getItem("idc");
  if (this.id!=null){
    
    if(this.role=="admin"){
      this.router.navigateByUrl("/home")
    }
    else {
      this.router.navigateByUrl("/homeclient")
    }
  }
  else{
    this.fAllproduit()
  }
  
  
  
}

fAllproduit() {
  this.service.AllProduit().subscribe(
    (res) => { console.log("liste produit", res); this.listproduit = res; },
    (error) => { console.log(error); }
  );
}
}

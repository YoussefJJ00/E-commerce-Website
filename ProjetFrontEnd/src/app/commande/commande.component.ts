import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit 
{
  listcmd:any
  idcmd:any
  id:any
  listp:any
  constructor(private service:MyserviceService){}
  ngOnInit(): void {
    
    this.id=localStorage.getItem("idc");
    this.fAllCommande()
    
    
      
  }
  
  fAllCommande(){
    this.service.AllCommande().subscribe(
      (res)=>{console.log("list of commandes ",res); this.listcmd=res}, 
      (error)=>{console.log(error)}
  )
  }
  





}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  
  oneproduit:any
  id=this.activatedrouted.snapshot.params['id']
  constructor(private service:MyserviceService , private activatedrouted:ActivatedRoute) {}
  ngOnInit(): void {
  this.Detailproduit() 
}
Detailproduit(){
  this.service.Detailsproduit(this.id).subscribe(
    (res)=>{this.oneproduit=res;console.log("details produit" , res)},
    (error)=>{console.log("error")}
  )
}
}
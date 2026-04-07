import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {
  onecategory:any
  id=this.activatedrouted.snapshot.params['id']

  constructor(private service:MyserviceService , private activatedrouted:ActivatedRoute ,private router:Router) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
  this.Detailcategory() }
}
Detailcategory(){
  this.service.Detailscategory(this.id).subscribe(
    (res)=>{this.onecategory=res;console.log("details category" , res)},
    (error)=>{console.log("error")}
  )
}
}
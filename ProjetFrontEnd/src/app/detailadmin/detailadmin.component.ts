import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.css']
})
export class DetailadminComponent implements OnInit {
  
  oneadmin:any
  id=this.activatedrouted.snapshot.params['id']
  constructor(private service:MyserviceService , private activatedrouted:ActivatedRoute, private router:Router) {}
  ngOnInit(): void { if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
  else{
  this.Detailadmin() }
}
Detailadmin(){
  this.service.Detailsadmin(this.id).subscribe(
    (res)=>{this.oneadmin=res;console.log("details d'admin" , res)},
    (error)=>{console.log("error")}
  )
}
}



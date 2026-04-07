import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {
  oneclient:any
  role:string
  admin="admin"
  client="client"
  id=this.activatedrouted.snapshot.params['id']
  idx:String
  constructor(private service:MyserviceService , private activatedrouted:ActivatedRoute) {}
  ngOnInit(): void {
  this.Detailclient();
  this.id=localStorage.getItem("idc");
  this.role=localStorage.getItem("role");

  
}
Detailclient(){
  this.service.Detailsclient(this.id).subscribe(
    (res)=>{this.oneclient=res;console.log("details client" , res);
    console.log("role",this.role)
     },

    (error)=>{console.log("error")}
  )
}

}

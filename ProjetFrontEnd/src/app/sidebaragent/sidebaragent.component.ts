import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebaragent',
  templateUrl: './sidebaragent.component.html',
  styleUrls: ['./sidebaragent.component.css']
})
export class SidebaragentComponent implements OnInit {
  id:String;
  role: String;
  constructor(private router:Router,private service:MyserviceService){}
  ngOnInit(): void {
    this.id=localStorage.getItem("idc");
    this.role=localStorage.getItem("role");
    console.log(this.id)

      
  }
  profile(){
    this.router.navigateByUrl("/detailclient/"+this.id)
  }
  commande(){
    this.router.navigateByUrl("/commande/"+this.id)
  }
 
}

import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-histocmd',
  templateUrl: './histocmd.component.html',
  styleUrls: ['./histocmd.component.css']
})
export class HistocmdComponent implements OnInit {
  id=localStorage.getItem("idc")
  listhis:any
  constructor(private service:MyserviceService , private router:Router) {}
  

  ngOnInit(): void {

    this.fallcmdhisto(this.id)
   
}
fallcmdhisto(id){
  this.service.allhiscmd(id).subscribe(
    (res)=>{console.log("liste history",res); 
    this.listhis=res}, 
    (error)=>{console.log(error)}

  );
  


}



}
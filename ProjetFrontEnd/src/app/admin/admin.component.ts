import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listadmin:any
  constructor(private service:MyserviceService,private router:Router) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
else{  this.fAllAdmin() }
    
  
}
fAllAdmin(){
  this.service.AllAdmin().subscribe(
    (res)=>{console.log("liste admin",res); this.listadmin=res}, 
    (error)=>{console.log(error)}

  )
}

delete(id:string){
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteOneadmin(id).subscribe(
          (res:any)=>{console.log("ok");
  this.fAllAdmin()
        },
        (error:any)=>{console.log("error is",error)}
        )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


}


}

import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  listcategory:any
  constructor(private service:MyserviceService ,private router:Router) {}
  ngOnInit(): void {
    if(localStorage.getItem("role")=="client"){this.router.navigateByUrl("/homeclient")}
    else{
  this.fAllcategory() 
    }
  
}
fAllcategory(){
  this.service.AllCategory().subscribe(
    (res)=>{console.log("liste category",res); this.listcategory=res}, 
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
        this.service.deleteOnecategory(id).subscribe(
          (res:any)=>{console.log("ok");
  this.fAllcategory()
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
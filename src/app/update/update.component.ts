import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { datamodel } from '../data/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  public detaid!:number;
  public employee!:datamodel;
constructor(private activatedroute:ActivatedRoute,private router:Router,private service:ServiceService){}
ngOnInit() {
  this.activatedroute.paramMap.subscribe((param:Params)=>{
  this.detaid=param['get']("id");
// console.log("data id is",this.detaid)
  })
  this.service.fetchdata(this.detaid).subscribe((data:datamodel)=>{
  this.employee=data;
  })
}
update(){
  this.service.updateemployee(this.employee,this.detaid).subscribe((res:datamodel)=>{
    this.router.navigate(["/"])
  })
}




  // itemToUpdate: any; 

  

  //  updateemployee(): void {
  //      // Call the update method from the DataService
  //    this.service.updateemployee(this.itemToUpdate);
  //  }
  // itemToUpdate(itemToUpdate: any) {
  //   throw new Error('Method not implemented.');
  // }
}

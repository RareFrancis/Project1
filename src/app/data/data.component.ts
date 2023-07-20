import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { datamodel } from './model';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

 
  employeeform!:FormGroup;
   data:undefined|datamodel[];
  constructor(private formBuilder:FormBuilder,private service:ServiceService){ }
   ngOnInit() {
   this.employeeform = this.formBuilder.group ({
      
      name:['',Validators.required],
      phonenumber:['',[Validators.required,Validators.maxLength(10)]],
      address:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
    
   })
  this.getemployee();
  }
  addemployee(data:datamodel){
//console.log(data)
this.service.addemployee(data).subscribe((res=>{
  this.employeeform.reset();
})) 
 this.getemployee();
}

getemployee(){
  this.service.getemployee().subscribe(res=>{
    this.data= res;
  })
}
 delete(id:any){
  
  this.service.delete(id).subscribe((result:any)=>{
    
  });
  this.getemployee();
  
  




}
  




  

}

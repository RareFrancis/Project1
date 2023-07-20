import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './data/model';
@Injectable({
  providedIn: 'root' 
})
export class ServiceService {

  constructor(private http:HttpClient) { }


//add employee
addemployee(data:datamodel) {
  return this.http.post<datamodel>("http://localhost:3000/posts",data)
}

//get employee
getemployee(){
  return this.http.get<datamodel[]>("http://localhost:3000/posts");
}

//delete data
// delete(id:any){
//   const url = "http://localhost:3000/posts/"
//   return this.http.delete<datamodel>(url + id,);
// }

//delet data
delete(id:number){
  return this.http.delete<datamodel>("http://localhost:3000/posts/"+id);
}


//fetch data
fetchdata(id:number){
  return this.http.get<datamodel>("http://localhost:3000/posts/"+id);
}
// update
updateemployee(data:datamodel,id:number){
  return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data);
}








}

// function addemployee(data: any, datamodel: any) {
//   throw new Error('Function not implemented.');
 



// }





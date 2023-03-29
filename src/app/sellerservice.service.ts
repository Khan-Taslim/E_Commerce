import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { data, getdata } from './datatyoe';

@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {

  constructor(private service:HttpClient, private router:Router) { }

  signupuser(cred:data)
  {
    this.service.post(`http://localhost:3000/seller`,cred,{observe:'response'}).subscribe(res=>{
      localStorage.setItem("seller", JSON.stringify(res.body))
      this.router.navigate(["seller-home"]);
    })
  }
  loginuser(cred:any)
  {
    this.service.get(`http://localhost:3000/seller?email=${cred.email}&password=${cred.password}`,{observe:'response'}).subscribe((res:any)=>{
    if(res && res.body && res.body.length)
    {
      alert("Login successfully");
      localStorage.setItem("seller", JSON.stringify(res.body))
      this.router.navigate(["seller-home"]);
    } 
    else{
      alert("Invalid credentials");
    }
    })
  }


  getproducts()
  {
   return this.service.get(`http://localhost:3000/products`)
  }
  postdata(data:getdata)
  {
    return this.service.post(`http://localhost:3000/products`,data);
  }
  ddata(id:any){
    return this.service.delete(`http://localhost:3000/products`,id)
  }
}

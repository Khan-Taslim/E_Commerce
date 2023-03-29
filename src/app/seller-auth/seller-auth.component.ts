import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from '../datatyoe';
import { SellerserviceService } from '../sellerservice.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
constructor(private services:SellerserviceService, private router:Router){}
 signupform:FormGroup=new FormGroup({
  name:new FormControl(""),
  email:new FormControl(""),
  password:new FormControl("")
 })
 loginform:FormGroup=new FormGroup({
  email:new FormControl(""),
  password:new FormControl("")
})
showlogin:boolean=false;
login()
{
  this.showlogin=false;
}
signup()
{
  this.showlogin=true;
}
senddata(cred:data)
{
  this.services.signupuser(this.signupform.value);
}
checklogin()
{
  this.services.loginuser(this.loginform.value);
}

}




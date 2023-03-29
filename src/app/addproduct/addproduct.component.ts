import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getdata } from '../datatyoe';
import { SellerserviceService } from '../sellerservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
constructor(private eserv:SellerserviceService) {

}
addprodform:FormGroup=new FormGroup({
  pcompany:new FormControl(""),
  pname:new FormControl(""),
  pspec:new FormControl(""),
  pprice:new FormControl(""),
  color:new FormControl(""),
  image:new FormControl(""),
  id:new FormControl("")
})

postdataadd(data:getdata)
{
  this.eserv.postdata(this.addprodform.value).subscribe(res=>alert("posted data successfully"));
}

}

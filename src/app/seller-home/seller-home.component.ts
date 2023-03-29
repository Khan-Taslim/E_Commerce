import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerserviceService } from '../sellerservice.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  constructor(private serv:SellerserviceService, private router:Router){}
  localvar:any;
  ngOnInit():void
  {
    this.serv.getproducts().subscribe(res=>this.localvar=res);
  }

  deletedata(id:any):void
  {
    this.serv.ddata(id).subscribe(res=>console.log(res));
  }
}

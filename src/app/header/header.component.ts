import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(public router:Router){}
logfun:String='default';  
sellername:String="";
ngOnInit(): void {
  this.router.events.subscribe((res:any)=>{
    if(res.url)
    {
      if(localStorage.getItem("seller") && res.url.includes("seller"))
      {
        let sellerdata=localStorage.getItem("seller");
        let sellervalue=sellerdata && JSON.parse(sellerdata)[0]
        this.sellername=sellervalue.name;
        this.logfun="seller";
      }
      else{
        this.logfun="default";
      }
    }
  })
  }
  logout(){
    localStorage.removeItem('seller')
    this.router.navigate([""]);
  }

}

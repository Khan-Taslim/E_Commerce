import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"seller-auth",component:SellerAuthComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"seller-home",component:SellerHomeComponent},
  {path:"addproduct", component:AddproductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

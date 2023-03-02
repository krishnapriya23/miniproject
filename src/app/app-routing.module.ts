import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DogfoodsComponent } from './pages/dogfoods/dogfoods.component';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { CreateComponent } from './pages/login/create/create.component';
import { CatfoodsComponent } from './pages/catfoods/catfoods.component';
import { CattoysComponent } from './pages/cattoys/cattoys.component';
import { DogfoodbuyComponent } from './pages/dogfoodbuy/dogfoodbuy.component';
  import { FishfoodComponent } from './pages/fishfood/fishfood.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent 
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'dogfoods',component:DogfoodsComponent
  },
  {
    path:'create',component:CreateComponent
  },
  {
    path:'catfoods',component:CatfoodsComponent
  },
  {
    path:'cattoys',component:CattoysComponent
  },
 {
    path:'dogfoodbuy',component:DogfoodbuyComponent
 },
 {
    path:'fishfood',component:FishfoodComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

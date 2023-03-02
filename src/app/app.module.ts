import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { UtilesComponent } from './utiles/utiles.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utiles/navbar/navbar.component';
import { FooterComponent } from './utiles/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DogfoodsComponent } from './pages/dogfoods/dogfoods.component';
import { CreateComponent } from './pages/login/create/create.component';
import { DogtoysComponent } from './pages/dogtoys/dogtoys.component';
import { CatfoodsComponent } from './pages/catfoods/catfoods.component';
import { CattoysComponent } from './pages/cattoys/cattoys.component';
import { DogfoodbuyComponent } from './pages/dogfoodbuy/dogfoodbuy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FishfoodComponent } from './pages/fishfood/fishfood.component';
import { CatfoodbuyComponent } from './pages/catfoodbuy/catfoodbuy.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    UtilesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContactusComponent,
    DogfoodsComponent,
    CreateComponent,
    DogtoysComponent,
    CatfoodsComponent,
    CattoysComponent,
    DogfoodbuyComponent,
    FishfoodComponent,
    CatfoodbuyComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

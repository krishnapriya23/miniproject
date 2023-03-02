import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-catfoods',
  templateUrl: './catfoods.component.html',
  styleUrls: ['./catfoods.component.css']
})
export class CatfoodsComponent {
  constructor(private hero:HeroService,private router:Router){}

  catfoods = this.hero.getData1()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/catfoodbuy'])
  }
}

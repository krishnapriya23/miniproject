import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-fishfood',
  templateUrl: './fishfood.component.html',
  styleUrls: ['./fishfood.component.css']
})
export class FishfoodComponent {
  constructor(private hero:HeroService,private router:Router){}

  dogfoods = this.hero.getData2()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/fishfoodbuy'])
    
  }
}

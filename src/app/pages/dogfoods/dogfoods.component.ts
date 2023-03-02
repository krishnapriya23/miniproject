import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-dogfoods',
  templateUrl: './dogfoods.component.html',
  styleUrls: ['./dogfoods.component.css']
})
export class DogfoodsComponent {
  constructor(private hero:HeroService,private router:Router){}

  dogfoods = this.hero.getData()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/dogfoodbuy'])
    
  }

}

import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-dogfoodbuy',
  templateUrl:'./dogfoodbuy.component.html',
  styleUrls: ['./dogfoodbuy.component.css']
})
export class DogfoodbuyComponent {
  dogfoodbuy:any
 
  constructor(private Dogfoods:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let dogfoodbuyDataArray = this.Dogfoods.getData();

    this.dogfoodbuy = dogfoodbuyDataArray.filter(d =>d.name === pageId)
    console.log(this.dogfoodbuy);
    
  }
}

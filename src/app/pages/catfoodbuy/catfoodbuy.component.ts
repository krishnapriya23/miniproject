import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-catfoodbuy',
  templateUrl: './catfoodbuy.component.html',
  styleUrls: ['./catfoodbuy.component.css']
})
export class CatfoodbuyComponent {
  catfoodbuy:any
  constructor(private Catfoods:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let catfoodbuyDataArray = this.Catfoods.getData1();

    this.catfoodbuy = catfoodbuyDataArray.filter(d =>d.name === pageId)
    console.log(this.catfoodbuy);
    
  }
}

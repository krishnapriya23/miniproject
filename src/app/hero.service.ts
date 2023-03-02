import { Injectable } from '@angular/core';
import { catfoods, dogfoods, fishfood } from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return dogfoods
}
  getData1()
{
  return catfoods
}
  getData2()

{
  return fishfood
}
}
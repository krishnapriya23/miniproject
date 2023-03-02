import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petshop';
  rating: number = 3;
  starCount: number = 5;

  onRatingChanged(rating: number) {
    this.rating = rating;
  }
}

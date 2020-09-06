import { Component } from '@angular/core';

@Component({
  selector: 'yess-app-root',
  templateUrl: './yess-app.component.html',
  styleUrls: ['./yess-app.component.css']
})
export class YessAppComponent {
  title = 'grocery-store';
  filterAds = [
    "assets/images/filterbanner.jpg",
    "assets/images/filterbanner2.jpg",
    "assets/images/filterbanner3.jpg"
    ]
}

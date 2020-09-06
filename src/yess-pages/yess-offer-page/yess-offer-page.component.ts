import { Component, OnInit } from '@angular/core';
const fieldConfig = require('src/helper/yess-category-helper.json');

@Component({
  selector: 'yess-offer-page',
  templateUrl: './yess-offer-page.component.html',
  styleUrls: ['./yess-offer-page.component.css']
})
export class YessOfferPageComponent implements OnInit {

  products;

  constructor() {
    this.products = fieldConfig;
  }

  ngOnInit() {
  }

}

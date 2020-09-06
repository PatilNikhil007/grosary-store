import { Component, OnInit } from '@angular/core';
const fieldConfig = require('src/helper/yess-add-to-cart-helper.json');

@Component({
  selector: 'yess-add-to-cart',
  templateUrl: './yess-add-to-cart.component.html',
  styleUrls: ['./yess-add-to-cart.component.css']
})
export class YessAddToCartComponent implements OnInit {

  products;

  constructor() {
    this.products = fieldConfig;
  }

  ngOnInit() {
  }

}

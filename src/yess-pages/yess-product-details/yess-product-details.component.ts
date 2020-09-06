import { Component, OnInit } from '@angular/core';
const fieldConfig = require('src/helper/yess-product-details-helper.json');

@Component({
  selector: 'yess-product-details',
  templateUrl: './yess-product-details.component.html',
  styleUrls: ['./yess-product-details.component.css']
})
export class YessProductDetailsComponent implements OnInit {

  products;

  constructor() {
    this.products = fieldConfig;
  }

  ngOnInit() {
  }

}

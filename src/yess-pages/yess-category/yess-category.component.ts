import { Component, OnInit } from '@angular/core';
const fieldConfig = require('src/helper/yess-category-helper.json');

@Component({
  selector: 'yess-category',
  templateUrl: './yess-category.component.html',
  styleUrls: ['./yess-category.component.css']
})
export class YessCategoryComponent implements OnInit {

  products;

  constructor() {
    this.products = fieldConfig;
  }

  ngOnInit() {
  }

}

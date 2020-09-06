import { Component, OnInit } from '@angular/core';
const fieldConfig = require('src/helper/yess-dashboard-helper.json');

@Component({
  selector: 'yess-dashboard',
  templateUrl: './yess-dashboard.component.html',
  styleUrls: ['./yess-dashboard.component.css']
})
export class YessDashboardComponent implements OnInit {
  products;

  constructor() {
    this.products = fieldConfig;
  }

  ngOnInit() {
  }

}

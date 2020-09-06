import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yess-product-card',
  templateUrl: './yess-product-card.component.html',
  styleUrls: ['./yess-product-card.component.css']
})
export class YessProductCardComponent implements OnInit {

  @Input() productDetail:{
    offerInPercentage:string;
    imageOfProduct:string;
    brandName?:string;
    productTitle:string;
    productPrice?:number;
    productOldPrice?:number;
  }  = {
    offerInPercentage: '0',
    imageOfProduct:'',
    brandName:'',
    productTitle:'',
    productPrice: 0,
    productOldPrice:0,
  }

  @Input() withDetail:boolean;
  constructor() { }

  ngOnInit() {
  }

}

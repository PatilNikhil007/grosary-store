import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';


import { YessDashboardComponent } from 'src/yess-pages/yess-dashboard/yess-dashboard.component';
import { YessCategoryComponent } from 'src/yess-pages/yess-category/yess-category.component';
import { YessAppComponent } from './yess-app.component';
import { YessAboutComponent } from 'src/yess-pages/yess-about/yess-about.component';
import { YessAddToCartComponent } from 'src/yess-pages/yess-add-to-cart/yess-add-to-cart.component';
import { YessProductDetailsComponent } from 'src/yess-pages/yess-product-details/yess-product-details.component';
import { YessOfferPageComponent } from 'src/yess-pages/yess-offer-page/yess-offer-page.component';
import { YessProductCardComponent } from 'src/yess-base-component/yess-product-card/yess-product-card.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  { path: 'dashboard', component: YessDashboardComponent },
  { path: 'category', component: YessCategoryComponent },
  { path: 'about', component: YessAboutComponent },
  { path: 'addtocart', component: YessAddToCartComponent },
  { path: 'product-details', component: YessProductDetailsComponent },
  { path: 'offers', component: YessOfferPageComponent },

  { path: '**',  component: YessDashboardComponent }

  // { path: 'second-component', component: SecondComponent },
]

@NgModule({
  declarations: [
    YessDashboardComponent,
    YessCategoryComponent,
    YessAboutComponent,
    YessAddToCartComponent,
    YessProductDetailsComponent,
    YessOfferPageComponent,
    YessProductCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports : [
    RouterModule,
    YessDashboardComponent,
    YessCategoryComponent,
    YessAboutComponent,
    YessAddToCartComponent,
    YessProductDetailsComponent,
    YessOfferPageComponent,
    YessProductCardComponent

  ]

})
export class YessAppRoutingModule { }

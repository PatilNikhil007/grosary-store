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
import { YessBlogPageComponent } from 'src/yess-pages/yess-blog-page/yess-blog-page.component';
import { YessTermsAndConditionsPageComponent } from 'src/yess-pages/yess-terms-and-conditions-page/yess-terms-and-conditions-page.component';
import { YessPrivacyPolicyComponent } from 'src/yess-pages/yess-privacy-policy/yess-privacy-policy.component';
import { YessInMediaComponent } from 'src/yess-pages/yess-in-media/yess-in-media.component';
import { YessGreenBasketComponent } from 'src/yess-pages/yess-green-basket/yess-green-basket.component';
import { YessFaqComponent } from 'src/yess-pages/yess-faq/yess-faq.component';
import { YessCustomerSpeakComponent } from 'src/yess-pages/yess-customer-speak/yess-customer-speak.component';
import { YessContactComponent } from 'src/yess-pages/yess-contact/yess-contact.component';
import { YessCheckoutComponent } from 'src/yess-pages/yess-checkout/yess-checkout.component';

const routes: Routes = [

  { path: 'dashboard', component: YessDashboardComponent },
  { path: 'category', component: YessCategoryComponent },
  { path: 'about', component: YessAboutComponent },
  { path: 'addtocart', component: YessAddToCartComponent },
  { path: 'product-details', component: YessProductDetailsComponent },
  { path: 'offers', component: YessOfferPageComponent },
  { path: 'blogs', component: YessBlogPageComponent },
  { path: 'terms-and-conditions', component: YessTermsAndConditionsPageComponent },
  { path: 'privacy-policy', component: YessPrivacyPolicyComponent },
  { path: 'in-media', component: YessInMediaComponent },
  { path: 'green-basket', component: YessGreenBasketComponent },
  { path: 'faq', component: YessFaqComponent },
  { path: 'customer-speak', component: YessCustomerSpeakComponent },
  { path: 'contact', component: YessContactComponent },
  { path: 'checkout', component: YessCheckoutComponent },
  { path: '**', component: YessDashboardComponent }

]

const components = [
  YessDashboardComponent,
  YessCategoryComponent,
  YessAboutComponent,
  YessAddToCartComponent,
  YessProductDetailsComponent,
  YessOfferPageComponent,
  YessBlogPageComponent,
  YessTermsAndConditionsPageComponent,
  YessPrivacyPolicyComponent,
  YessInMediaComponent,
  YessGreenBasketComponent,
  YessFaqComponent,
  YessCustomerSpeakComponent,
  YessContactComponent,
  YessCheckoutComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [
    RouterModule,
    components
  ]

})
export class YessAppRoutingModule { }

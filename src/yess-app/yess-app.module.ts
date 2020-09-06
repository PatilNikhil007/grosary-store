import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YessAppComponent } from './yess-app.component';
import { YessAppRoutingModule } from './yess-app-routing.module';

@NgModule({
  declarations: [
    YessAppComponent
  ],
  imports: [
    BrowserModule,
    YessAppRoutingModule,
  ],
  providers: [],
  bootstrap: [YessAppComponent],
  exports : [YessAppComponent]
})
export class YessAppModule { }

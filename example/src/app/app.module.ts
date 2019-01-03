import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule
		RouterModule.forRoot([

    {
      //A default path is required to prevent routing errors
      path:'',
      component: Component1Component,

    },
    {
      path: 'component1',
      component: Component1Component,
    },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

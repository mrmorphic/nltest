import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ComponentComponent } from './component.component';
import { VerticalBoxComponent } from './verticalbox.component';
import { HorizontalBoxComponent } from './horizontalbox.component';
import { GenericComponent } from './generic.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
  	AppComponent,
  	ComponentComponent,
  	VerticalBoxComponent,
  	HorizontalBoxComponent,
  	GenericComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
